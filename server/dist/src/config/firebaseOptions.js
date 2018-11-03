'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('dotenv/config');

var firebaseOptions = {
    firebaseUrl: process.env.FIREBASE_URL,
    serverKey: process.env.SERVER_KEY
};

exports.default = firebaseOptions;