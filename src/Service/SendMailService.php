<?php

namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

class SendMailService
{
    private $mailer;

    public function __construct(MailerInterface $mailer){
        $this->mailer = $mailer;
    }

    public function send(
        string $from,
        string $to,
        string $cc,
        string $subject,
        string $template,
        array $context
    ): void
    {
        // Creation du mail
        $email = new TemplatedEmail();
        if ($cc ==='') {
            $email->from($from)
                ->to($to)
                ->subject($subject)
                ->htmlTemplate("emails/$template.html.twig")
                ->context($context);
        } else {
            $email->from($from)
            ->to($to)
            ->cc($cc)
            ->subject($subject)
            ->htmlTemplate("emails/$template.html.twig")
            ->context($context);
        }
        // Envoie du mail
        $this->mailer->send($email);
    }
}