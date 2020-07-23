'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFacts;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFacts() {
    return (0, _nodeFetch2.default)('https://ssr-react.firebaseio.com/facts.json').then(function (res) {
        return res.json();
    });
}