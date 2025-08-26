#!/bin/sh

# This script is executed at container startup. It waits for the database to be available
# before running any Laravel commands that require a database connection.

# Run composer dump-autoload to ensure all classes are properly loaded.
# This is a good practice for production.
composer dump-autoload --no-dev --optimize

# If the .env file doesn't exist, create it.
if [ ! -f ".env" ]; then
    cp .env.example .env
fi

# Run the Laravel cache commands to ensure the application is optimized.
# This is done here at runtime when the database is available.
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Start the supervisor daemon to manage the PHP-FPM process.
/usr/bin/supervisord -c /etc/supervisord.conf
