<?php

namespace App\Security;

use App\Entity\User as AppUser;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Core\Exception\AccountExpiredException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\Exception\DisabledException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserChecker implements UserCheckerInterface
{
    public function checkPreAuth(UserInterface $user)
    // public function checkPreAuth(UserInterface $user): void
    {
        if (!$user instanceof AppUser) {
            return;
        }

        // if ($user->isDeleted()) {
        if ($user->getIsBlocked()) {
            // the message passed to this exception is meant to be displayed to the user
            throw new CustomUserMessageAccountStatusException('Votre compte est désactivé');
        }
        // if (!$user->getIsActive()) {
        //     // the message passed to this exception is meant to be displayed to the user
        //     // throw new CustomUserMessageAccountStatusException('Votre compte n\'est pas activé');
        //     // return new RedirectResponse($this->urlGenerator->generate('app_new-password'));
        //     $ex = new DisabledException();
        //     $ex->setUser($user);
        //     throw $ex;
        // }
    }
    
    public function checkPostAuth(UserInterface $user): void
    {
        if (!$user instanceof AppUser) {
            return;
        }
        
        // user account is expired, the user may be notified
        // if ($user->isExpired()) {
        //     throw new AccountExpiredException('...');
        // }
    }
}