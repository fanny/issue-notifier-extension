'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controller = require('./controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiRoute = _express2.default.Router();

apiRoute.post('/register', _controller.register);
apiRoute.post('/watch', _controller.watch);

exports.default = apiRoute;