export const server = ''

export const endpoints = {
  resolveUser: `/api/v1/users`,
  getClientById: (id) => `/api/v1/users/${id}`,
  createTicket: `/api/v1/tickets`,
  listTickets: `/api/v1/tickets/list`,
  getTicketById: (id) => `/api/v1/tickets/${id}`,
  updateTicket: (id) => `/api/v1/tickets/${id}`,
  createComment: (id) => `/api/v1/tickets/${id}/reply`,
  updateComment: (id) => `/api/v1/threads/${id}`
}

