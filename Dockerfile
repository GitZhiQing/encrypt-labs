FROM php:fpm-alpine

RUN sed -i 's#https\?://dl-cdn.alpinelinux.org/alpine#https://mirrors.tuna.tsinghua.edu.cn/alpine#g' /etc/apk/repositories \
    && apk add --no-cache \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    nginx \
    mariadb mariadb-client \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo_mysql

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html

COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./config/docker-php-ext-mysqli.ini /usr/local/etc/php/conf.d
COPY ./config/docker-php-ext-pdo_mysql.ini /usr/local/etc/php/conf.d
COPY --chown=www-data:www-data src /var/www/html
COPY --chmod=500 init.sh /init.sh

EXPOSE 9000
CMD ["/init.sh"]