import { expect } from 'chai'
import config from '../config.test'
import api from '../../src'

describe('tests for get ticket by id request', () => {
  it('should response without error', function () {
    this.timeout(20000)
    const service = api.service({ auth: config })

    const id = 10

    return service.getTicketById(id)
      .then(res => {
        console.log(JSON.stringify(res))
        expect(res.id).to.be.a('number')
      })
      .catch(err => {
        console.log(err.data)
        throw err
      })
  })
})
