<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/3.x/advanced.html#automatic-escaping
            new TwigFilter('formatPhone', [$this, 'formatPhoneNumber']),
            new TwigFilter('formatPostalCode', [$this, 'formatPostalCode']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('function_name', [$this, 'doSomething']),
        ];
    }

    public function formatPhoneNumber(string $phone)
    {
    $rev = strrev($phone);
    $split = trim(chunk_split($rev, 2, ' '));
    // echo strrev($split);
    return strrev($split);
    }

    public function formatPostalCode(string $zipCode)
    {
    $rev = strrev($zipCode);
    $split = trim(chunk_split($rev, 3, ' '));
    // echo strrev($split);
    return strrev($split);
    }
}
