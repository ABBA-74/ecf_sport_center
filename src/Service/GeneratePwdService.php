<?php

namespace App\Service;

use Exception;

class GeneratePwdService 
{

    /**
     * Generate a random string
     *
     * @param integer $length
     * @param string $keyspace
     * @return string
     */
    function random_str(
        $length = 12,
        $keyspace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ): string
        {
            $str = '';
            $max = mb_strlen($keyspace, '8bit') - 1;
            if ($max < 1) {
                throw new Exception('$keyspace must be at least two characters long');
            }
            for ($i = 0; $i < $length; ++$i) {
                $str .= $keyspace[random_int(0, $max)];
            }
            return $str;
        }
        
}
