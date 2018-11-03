'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('dotenv/config');

const firebaseOptions = {
    firebaseUrl: process.env.FIREBASE_URL,
    serverKey: process.env.SERVER_KEY
};

exports.default = firebaseOptions;