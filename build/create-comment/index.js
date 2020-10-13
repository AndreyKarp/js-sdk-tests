'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createComment;

var _config = require('../config');

var _request = require('../request/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createComment(_ref, id, param) {
  var auth = _ref.auth;

  var axios = new _request2.default(auth, _config.server);
  return axios.post(_config.endpoints.createComment(id), param).then(function (response) {
    return response;
  });
}
module.exports = exports.default;