"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firebase = require("firebase");

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    apiKey: "AIzaSyCjVSaxYXIEL55d9dpE55P6z3DAJotUQvg",
    authDomain: "test-pwa-6f7a8.firebaseapp.com",
    databaseURL: "https://test-pwa-6f7a8.firebaseio.com",
    projectId: "test-pwa-6f7a8",
    storageBucket: "test-pwa-6f7a8.appspot.com",
    messagingSenderId: "687128074400"
};
var fire = _firebase2.default.initializeApp(config);
exports.default = fire;