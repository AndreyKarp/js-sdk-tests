import { endpoints, server } from '../config'
import Axios from '../request/request'

export default function createComment ({ auth }, id, param) {
  const axios = new Axios(auth, server)
  return axios.post(endpoints.createComment(id), param)
    .then(response => {
      return response
    })
}
