FROM php:8.3-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql 

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

#Arguments defined in docker-compose.yml
ARG user
ARG uid

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user

#Set Permissions
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

# Set working directory
WORKDIR /var/www/html

#Set User
USER $user

# Expose port 9000 and start php-fpm server (for FastCGI Process Manager)
EXPOSE 9000

CMD ["php-fpm"]
