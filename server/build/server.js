'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 5000;
var firebaseurl = 'https://fcm.googleapis.com/fcm/send';
var userToken = null;

app.use(_express2.default.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/register', function (req, res) {
    console.log(req.body);
    userToken = req.body.userToken;
    res.sendStatus(201);
});

app.post('/watch', function (req, res) {
    var body = req.body;
    var action = body.action,
        title = body.issue.title,
        login = body.sender.login,
        html_url = body.html_url;


    (0, _axios2.default)({
        url: firebaseurl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'key=AAAAdP7E4sU:APA91bEYRdiqUtOq0ukF0WdTbeInl71bOtkJC_g_zP8WLeQDRngBGf6m1eJdEG2wIvVWXuiaLGZvLkhqk9-D3LUltG_OdZU6wVayy76d_CGweuLuk1cNwNpNWGFuv4byERGy2Lr5q51U'
        },
        data: {
            'notification': {
                'title': 'issue-notifier',
                'body': login + ' ' + action + ' in issue #' + title,
                'click_action': 'html_url'
            },
            'to': '' + userToken
        }
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
});

app.listen(port);

console.log('app running on port', port);