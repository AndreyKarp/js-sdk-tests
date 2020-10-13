'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolveUser = require('./resolve-user');

var _resolveUser2 = _interopRequireDefault(_resolveUser);

var _getClientById = require('./get-client-by-id');

var _getClientById2 = _interopRequireDefault(_getClientById);

var _createTicket = require('./create-ticket');

var _createTicket2 = _interopRequireDefault(_createTicket);

var _getTicketById = require('./get-ticket-by-id');

var _getTicketById2 = _interopRequireDefault(_getTicketById);

var _listTickets = require('./list-tickets');

var _listTickets2 = _interopRequireDefault(_listTickets);

var _createComment = require('./create-comment');

var _createComment2 = _interopRequireDefault(_createComment);

var _updateTicket = require('./update-ticket');

var _updateTicket2 = _interopRequireDefault(_updateTicket);

var _updateComment = require('./update-comment');

var _updateComment2 = _interopRequireDefault(_updateComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  service: function service(config) {
    return {
      resolveUser: _resolveUser2.default.bind(null, config),
      getClientById: _getClientById2.default.bind(null, config),
      createTicket: _createTicket2.default.bind(null, config),
      getTicketById: _getTicketById2.default.bind(null, config),
      listTickets: _listTickets2.default.bind(null, config),
      createComment: _createComment2.default.bind(null, config),
      updateTicket: _updateTicket2.default.bind(null, config),
      updateComment: _updateComment2.default.bind(null, config)
    };
  }
};
module.exports = exports.default;