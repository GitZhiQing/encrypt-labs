#!/bin/sh
if [ -z "$GZCTF_FLAG" ]; then
    GZCTF_FLAG="flag{this_is_a_sample_flag}"
fi
echo $GZCTF_FLAG >/flag
chmod 444 /flag
unset GZCTF_FLAG

# 初始化 MySQL 数据目录
mariadb-install-db --user=mysql --datadir=/var/lib/mysql

# 启动 MySQL 服务
mariadbd-safe --datadir=/var/lib/mysql &

# 等待 MySQL 启动
while ! mariadb-admin ping --silent; do
    sleep 1
done

# 导入初始数据
mariadb -u root </var/www/html/encryptDB.sql

mariadb-admin -uroot password '123456'

php-fpm -D
nginx -g 'daemon off;'