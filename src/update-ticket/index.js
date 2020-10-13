import { endpoints, server } from '../config'
import Axios from '../request/zendesk-request'

export default function createComment ({ auth }, id, param) {
  const axios = new Axios(auth, server)
  return axios.put(endpoints.updateTicket(id), param)
    .then(response => {
      return response
    })
}
