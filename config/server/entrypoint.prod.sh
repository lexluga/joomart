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

# ------------------------------------------------------------------
# ✅ Ensure all required Laravel paths exist
# ------------------------------------------------------------------
echo "🛠️ Ensuring storage and cache directories exist..."
mkdir -p storage/framework/{sessions,views,cache}
mkdir -p bootstrap/cache
mkdir -p resources/views
chown -R "$(whoami):$(whoami)" storage bootstrap/cache resources/views
chmod -R 775 storage bootstrap/cache resources/views

# ------------------------------------------------------------------
# Storage symlink
# ------------------------------------------------------------------
if [ ! -L "public/storage" ]; then
    echo "🔗 Creating storage symlink..."
    php artisan storage:link || true
fi

# ------------------------------------------------------------------
# Run migrations
# ------------------------------------------------------------------
echo "🗄️ Running migrations..."
php artisan migrate --force || true

# ------------------------------------------------------------------
# Clear caches
# ------------------------------------------------------------------
echo "🧹 Clearing caches..."
php artisan config:clear || true
php artisan route:clear || true
php artisan view:clear || true

# ------------------------------------------------------------------
# Rebuild optimized caches
# ------------------------------------------------------------------
echo "⚡ Building caches..."
php artisan config:cache || true

if [ "$APP_ENV" = "production" ]; then
    echo "🌐 Production mode: caching routes..."
    php artisan route:cache || true
else
    echo "🧪 Non-production mode: skipping route cache..."
fi

php artisan view:cache || true

echo "✅ Laravel ($APP_ENV) ready. Starting PHP-FPM..."
exec php-fpm --nodaemonize
