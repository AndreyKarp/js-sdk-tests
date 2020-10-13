import { endpoints, server } from '../config'
import Axios from '../request/request'

export default function createTicket ({ auth }, param) {
  const axios = new Axios(auth, server)
  return axios.post(endpoints.createTicket, param)
    .then(response => {
      return response
    })
}
