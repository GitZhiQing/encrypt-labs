FROM php:fpm-alpine

RUN apk add --no-cache \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    nginx \
    mariadb mariadb-client \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo_mysql

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html

COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY config/php.ini /usr/local/etc/php/conf.d/php.ini
COPY --chown=www-data:www-data src /var/www/html
COPY --chmod=500 init.sh /init.sh

EXPOSE 9000
CMD ["/init.sh"]