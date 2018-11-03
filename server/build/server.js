'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 5000;
var firebaseurl = 'https://fcm.googleapis.com/fcm/send';

app.use(_express2.default.json());

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
            'to': 'f2C0sc9UpgU:APA91bHzR4GvftHawcUY1aMtfw4WbgJmDk0TKZUx12MRC702SVRggqxbankIyA-ViBR5BLjex5G6avMYIY31gpPZ-8duiQy_KG4l7Mr_JZRkQ3B1yR667viu8bpCdXEFK2wenNR-H_48'
        }
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(response);
    });
});

app.listen(port);

console.log('app running on port', port);