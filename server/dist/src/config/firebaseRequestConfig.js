'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firebaseOptions = require('./firebaseOptions');

var _firebaseOptions2 = _interopRequireDefault(_firebaseOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firebaseUrl = _firebaseOptions2.default.firebaseUrl,
    serverKey = _firebaseOptions2.default.serverKey;


var getHeader = function getHeader() {
    return {
        'Content-Type': 'application/json',
        'Authorization': 'key=' + serverKey
    };
};

var getBody = function getBody(data, userToken) {
    var action = data.action,
        _data$issue = data.issue,
        title = _data$issue.title,
        html_url = _data$issue.html_url,
        login = data.sender.login;


    return {
        'notification': {
            'title': 'issue-notifier',
            'body': login + ' ' + action + ' in issue #' + title,
            'click_action': '' + html_url
        },
        'to': '' + userToken
    };
};

var firebaseRequestConfig = function firebaseRequestConfig(data, userToken) {
    return {
        url: firebaseUrl,
        method: 'post',
        headers: getHeader(serverKey),
        data: getBody(data, userToken)
    };
};

exports.default = firebaseRequestConfig;