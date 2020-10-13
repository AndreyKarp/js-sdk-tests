import resolveUser from './resolve-user'
import getClientById from './get-client-by-id'
import createTicket from './create-ticket'
import getTicketById from './get-ticket-by-id'
import listTickets from './list-tickets'
import createComment from './create-comment'
import updateTicket from './update-ticket'
import updateComment from './update-comment'

export default {
  service: (config) => {
    return {
      resolveUser: resolveUser.bind(null, config),
      getClientById: getClientById.bind(null, config),
      createTicket: createTicket.bind(null, config),
      getTicketById: getTicketById.bind(null, config),
      listTickets: listTickets.bind(null, config),
      createComment: createComment.bind(null, config),
      updateTicket: updateTicket.bind(null, config),
      updateComment: updateComment.bind(null, config),
    }
  },
}
