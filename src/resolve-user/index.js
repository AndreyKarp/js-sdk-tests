import { endpoints, server } from '../config'
import Axios from '../request/request'

export default function resolveUser ({ auth }, param) {
  const axios = new Axios(auth, server)
  return axios.post(endpoints.resolveUser, param)
    .then(response => {
      return response
    })
}
