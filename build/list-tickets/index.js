'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listTickets;

var _config = require('../config');

var _zendeskRequest = require('../request/zendesk-request');

var _zendeskRequest2 = _interopRequireDefault(_zendeskRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listTickets(_ref, param) {
  var auth = _ref.auth;

  var axios = new _zendeskRequest2.default(auth, _config.server);
  return axios.post(_config.endpoints.listTickets, param).then(function (response) {
    return response;
  });
}
module.exports = exports.default;