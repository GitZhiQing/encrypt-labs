#!/bin/sh
echo $GZCTF_FLAG >/flag
chmod 444 /flag
unset GZCTF_FLAG

mysqld --initialize --user=mysql --datadir=/var/lib/mysql

# 启动 MySQL 服务
mysqld --datadir=/var/lib/mysql &

# 等待 MySQL 启动
while ! mysqladmin ping --silent; do
    sleep 1
done

# 导入初始数据
mysql -u root </var/www/html/encryptDB.sql

php-fpm -D
nginx -g 'daemon off;'