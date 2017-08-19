const express = require('express');
const app = express();
const request = require('request');
const qs = require('query-string');

app.use(express.static('client'));
const client_id = '846e96088502a6be5f49';
const client_secret = 'd20cea25d44f0ebd04bc7b6ccb77c0d27e35beab';
app.get('/login', (req, res, next) => {
  res.set({'Access-Control-Allow-Origin': '*'});
  res.redirect(`http://github.com/login/oauth/authorize?client_id=${client_id}`);
});

app.get('/auth/callback', (req, res, next) => {
  console.log('callback route hit!!!!: ', req.url);
  const code = req.url.split('=')[1];
  console.log('code: ', code );
  request({
    uri: `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
    method: 'POST'
  }, function(e, response, body) {
    console.log('error: ', e);
    console.log('received data: ', body)
  })
});

app.listen(8000, () => {console.log('Listening on 8000')});

//
