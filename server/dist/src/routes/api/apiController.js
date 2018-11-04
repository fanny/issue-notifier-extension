'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.watch = exports.register = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _firebaseRequestConfig = require('../../config/firebaseRequestConfig');

var _firebaseRequestConfig2 = _interopRequireDefault(_firebaseRequestConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userToken = null;
var register = function register(req, res) {
    userToken = req.body.userToken;
    res.sendStatus(201);
};

var watch = function watch(req, res) {
    var body = req.body;

    sendNotification(body);
};

var sendNotification = function sendNotification(data) {
    var requestConfig = (0, _firebaseRequestConfig2.default)(data, userToken);

    (0, _axios2.default)(requestConfig).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
};

exports.register = register;
exports.watch = watch;