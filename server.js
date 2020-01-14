require('dotenv').config();
const https = require('https');

const express = require('express');
const morgan = require('morgan');
const next = require('next');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

const apiHandler = require('./api');
const conn = require('./database/pool');

// 미들웨어
server.use(cors());
server.use(cookieParser());
server.use(express.json({ limit: '1mb', extended: true }));
server.use(morgan(dev ? 'dev' : 'tiny'));
server.use((req, res, next) => {
  req.db = conn;
  next();
});

// 라우터
server.use('/api', apiHandler);

// next js 라우터
app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res);
  });
});

// dev와 master 통일을 위한 if 문
if (process.env.NODE_ENV === 'production') {
  var ca = fs.readFileSync('/home/ubuntu/ssl/Chain_RootCA_Bundle.crt');
  var privateKey = fs.readFileSync('/home/ubuntu/ssl/chabot_key.pem');
  var certificate = fs.readFileSync('/home/ubuntu/ssl/star_chabot_kr_cert.pem');
  var credentials = { key: privateKey, cert: certificate, ca, passphrase: 'chabot123!@#' };

  https.createServer(credentials, server).listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on https://localhost:3000');
    // redirect 오류로 추가 key 190930
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  });
} else {
  console.log(process.env.NODE_ENV);
  server.listen(port, err => {
    if (err) throw err;

    console.log('Serving Mode: ', process.env.NODE_ENV);
    console.log(`> Ready on http://localhost:${port}`);
  });
}
