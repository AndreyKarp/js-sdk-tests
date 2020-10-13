'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var server = exports.server = 'https://uvdesk.slg.tools';

var endpoints = exports.endpoints = {
  resolveUser: '/api/v1/users',
  getClientById: function getClientById(id) {
    return '/api/v1/users/' + id;
  },
  createTicket: '/api/v1/tickets',
  listTickets: '/api/v1/tickets/list',
  getTicketById: function getTicketById(id) {
    return '/api/v1/tickets/' + id;
  },
  updateTicket: function updateTicket(id) {
    return '/api/v1/tickets/' + id;
  },
  createComment: function createComment(id) {
    return '/api/v1/tickets/' + id + '/reply';
  },
  updateComment: function updateComment(id) {
    return '/api/v1/threads/' + id;
  }
};