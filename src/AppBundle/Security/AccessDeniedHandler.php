<?php

namespace AppBundle\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;

class AccessDeniedHandler implements AuthenticationEntryPointInterface
{
    public function handle(Request $request, AccessDeniedException $accessDeniedException)
    {
        // ...

        return new Response($content, 403);
    }
}