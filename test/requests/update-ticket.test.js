import { expect } from 'chai'
import config from '../config.test'
import api from '../../src'

// describe('tests for update ticket', () => {
  it('should response without error', function () {
    this.timeout(20000)
    const service = api.service({ auth: config })

    const id = 10
    const params = {
      attributes: {
        agent: 29252
      }
    }

    return service.updateTicket(id, params)
      .then(res => {
        console.log(JSON.stringify(res))
        expect(res.id).to.be.equal(10)
        expect(res.agentId).to.be.equal(29252)
      })
      .catch(err => {
        console.log(err.data)
        throw err
      })
  })
// })
