import { endpoints, server } from '../config'
import Axios from '../request/zendesk-request'

export default function updateComment ({ auth }, id, param) {
  const axios = new Axios(auth, server)
  return axios.put(endpoints.updateComment(id), param)
    .then(response => {
      return response
    })
}
