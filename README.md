### NodeJs Study Memo

#### NODE TEST ENV

    v.8.9.4

#### SETUP

    npm install

#### Features

1.  promise (use bluebird) & async/await replace callback almost

2.  reduce redundant code

3.  arrow function applied

4.  ES6 class model applied

5.  for reactapp > npm run client

#### Nginx Refs

1. install

        brew install nginx

2.  run nginx (default)

        > sudo nginx

    `browser:http://localhost:8080`

3.  update doc

    `/usr/local/etc/nginx/nginx.conf`

        server {
            listen 80;
            server_name ichart.localhost;

            # 你的 Rails 項目的 public 目錄
            root /Users/xxx/xxx/xxx/book-notes/reactapp/public;

            # SSL SETs
            # listen 443 ssl http2;
            # ssl_certificate /Users/xxx/.ssl/ichart.crt;
            # ssl_certificate_key /Users/xxx/.ssl/ichart.key;

            location / {
                proxy_pass http://localhost:3000;
                proxy_set_header  Host $host;
            }
        }

4.  stop Nginx

        > sudo nginx -s stop

5.  server file location (default)

    `/usr/local/var/`

#### PM2

1. install

        npm install pm2 -g

2. start server

        pm2 start [server-entry].js

3. help

        pm2 -h

4. start 4 cores

        pm2 start -i 4 [server-entry].js

5. stop all / id

        pm2 delete all [/id]

6. lists all

        pm2 list

7. stop id

        pm2 stop id

8. restart all / id

        pm2 restart all [/id]

#### AOP 

        dynamic high order function applied in ['./aop']

#### BLOG Example

        1. Express cli
        2. MySQL CRUD match with [promise]
        3. EJS Template 
        4. Pager

#### Refs

1.  Node.js 实战开发 (簡)
2.  [NodeJS API](https://nodejs.org/api/index.html)
