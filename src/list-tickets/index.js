import { endpoints, server } from '../config'
import Axios from '../request/zendesk-request'

export default function listTickets ({ auth }, param) {
  const axios = new Axios(auth, server)
  return axios.post(endpoints.listTickets, param)
    .then(response => {
      return response
    })
}
