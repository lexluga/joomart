#!/bin/sh
set -e

echo "🚀 Bootstrapping Laravel API as $(whoami)..."

echo "⏳ Waiting for database connection..."
until php -r "
    try {
        new PDO(
            sprintf('mysql:host=%s;dbname=%s', getenv('DB_HOST'), getenv('DB_DATABASE')),
            getenv('DB_USERNAME'),
            getenv('DB_PASSWORD')
        );
        exit(0);
    } catch (Exception \$e) {
        exit(1);
    }
"; do
    sleep 2
done
echo "✅ Database is ready!"

cd /var/www/html

# Ensure storage symlink exists
if [ ! -L "public/storage" ]; then
    echo "🔗 Creating storage symlink..."
    php artisan storage:link || true
fi

# Run database migrations
echo "🗄️ Running migrations..."
if ! php artisan migrate --force; then
    echo "⚠️ Migrations failed — check DB connection or migration files."
fi

# Clear caches safely
echo "🧹 Clearing caches..."
php artisan config:clear || echo "⚠️ Failed to clear config cache"
php artisan route:clear || echo "⚠️ Failed to clear route cache"
php artisan view:clear || echo "⚠️ Failed to clear view cache"

if ! php artisan cache:clear; then
    echo "⚠️ Cache clear failed — check CACHE_STORE setting (e.g., database cache table may be missing)."
fi

# Rebuild optimized caches
echo "⚡ Building caches..."
php artisan config:cache || echo "⚠️ Failed to build config cache"
php artisan route:cache || echo "⚠️ Failed to build route cache"
php artisan view:cache || echo "⚠️ Failed to build view cache"

echo "✅ Laravel ready. Starting PHP-FPM..."
exec php-fpm --nodaemonize
