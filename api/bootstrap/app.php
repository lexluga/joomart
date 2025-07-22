<?php

use Illuminate\Foundation\Application;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        api: __DIR__.'/../routes/api.php',
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->api(append: [
            // Ensure Sanctum's stateful middleware is here
            EnsureFrontendRequestsAreStateful::class,
            // Add the StartSession middleware for your API routes
            StartSession::class,
            // You might also have other API middleware here, like 'throttle:api', etc.
    ]);


    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
