import { endpoints, server } from '../config'
import Axios from '../request/request'

export default function getClientById ({ auth }, id) {
  const axios = new Axios(auth, server)
  return axios.get(endpoints.getClientById(id))
    .then(response => {
      return response
    })
}
