import { endpoints, server } from '../config'
import Axios from '../request/request'

export default function getTicketById ({ auth }, id) {
  const axios = new Axios(auth, server)
  return axios.get(endpoints.getTicketById(id))
    .then(response => {
      return response
    })
}
