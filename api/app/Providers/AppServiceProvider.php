<?php

namespace App\Providers;

// app/Providers/AppServiceProvider.php
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        if (env('APP_ENV') !== 'local') { // Or check for production specifically
            URL::forceScheme('https');
        }
        // Alternatively, you can always force HTTPS if it's always behind SSL proxy
        // URL::forceScheme('https');
    }
}
