<?php

namespace App\Service;

class JWTService
{

    // Génération du token
    /**
     * Fonction qui génére un token JWT
     *
     * @param array $header
     * @param array $payload
     * @param string $secret
     * @param int $validity
     * @return string
     */
    public function generate(
        array $header,
        array $payload,
        string $secret,
        // int $validity = 10800 // 3h
        // int $validity = 7200 // 2h
        int $validity = 340 // 7s
        ): string
    {
        // Verification si validité du token < 0
        if($validity > 0){
            $now = new \DateTimeImmutable();
            // Set la date d'expiration
            $exp = $now->getTimestamp() + $validity;
    
            // Set la date de création du token + date d'expiration
            $payload['iat'] = $now->getTimestamp();
            $payload['exp'] = $exp;
        }


        // Encode en base64 header + payload
        $base64Header = base64_encode(json_encode($header));
        $base64Payload = base64_encode(json_encode($payload));
        
        // On retire les valeurs encodées (+,/,=)
        // $base64Header = str_replace(['+', '/', '='], ['-', '_', ''], $base64Header);
        $base64Header = $this->formatElementJWT($base64Header);
        // $base64Payload = str_replace(['+', '/', '='], ['-', '_', ''], $base64Payload);
        $base64Payload = $this->formatElementJWT($base64Payload);
        
        // Génération de la signature - Secret dans .env.local + Services.yaml
        $secret = base64_encode($secret);
        $signature = hash_hmac('sha256', $base64Header . '.' . $base64Payload, $secret, true);
        
        // Encode en base64 signature
        $base64Signature = base64_encode($signature);

        // On retire les valeurs encodées (+,/,=)
        // $base64Signature = str_replace(['+', '/', '='], ['-', '_', ''], $base64Signature);
        $base64Signature = $this->formatElementJWT($base64Signature);

        // Création du token
        $jwt = $base64Header . '.' . $base64Payload . '.' . $base64Signature;

        return $jwt;
    }

    // Fonction qui retire les valeurs encodées (+,/,=)
    private function formatElementJWT($el): string
    {
        return str_replace(['+', '/', '='], ['-', '_', ''], $el);
    }

    // Vérification si token est valide (- présence header + payload + signature -)
    public function isValid(string $token): bool
    {
        return preg_match(
            '/^[a-zA-Z0-9\-\_\=]+\.[a-zA-Z0-9\-\_\=]+\.[a-zA-Z0-9\-\_\=]+$/',
            $token
        ) === 1;
    }

    // Récupération du header
    public function getHeader(string $token): array
    {
        // Explode le token
        $arr = explode('.', $token);

        // Décode le header
        $header = json_decode(base64_decode($arr[0]), true);

        return $header;
    }


    // Récupération du payload
    public function getPayload(string $token): array
    {
        // Explode le token
        $arr = explode('.', $token);

        // Décode le payload
        $payload = json_decode(base64_decode($arr[1]), true);

        return $payload;
    }

    // Verification si token expiré
    public function isExpired(string $token): bool
    {
        $now = new \DateTimeImmutable();
        $payload = $this->getPayload($token);
        return $payload['exp'] < $now->getTimestamp();
    }

    // Vérification de la signature du token reçu avec un token regénéré possedant 
    // les mêmes dates iat + exp et le même user_id
    public function isCheckedSignature(string $token, string $secret): bool
    {
        // Récupération du header + payload
        $header = $this->getHeader($token);
        $payload = $this->getPayload($token);

        // Générer un nouveau token
        $verifToken = $this->generate($header, $payload, $secret, 0);

        return $token === $verifToken;
    }
}