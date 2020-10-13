import { expect } from 'chai'
import config from '../config.test'
import api from '../../src'

describe('tests for get client by id request', () => {
  it('should response without error', function () {
    this.timeout(20000)
    const service = api.service({ auth: config })

    const id = 4188

    return service.getClientById(id)
      .then(res => {
        console.log(res)
        expect(res.id).to.be.equal(id)
      })
      .catch(err => {
        console.log(err.data)
        throw err
      })
  })
})
