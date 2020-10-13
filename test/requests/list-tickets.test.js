import { expect } from 'chai'
import config from '../config.test'
import api from '../../src'

const params = {
  users: [ 4188 ],
  statuses: [ 1,2,3 ],
  limit: 1,
}

describe('tests list tickets request', () => {
  it('should response without error', function () {
    this.timeout(20000)
    const service = api.service({ auth: config })
    return service.listTickets(params)
      .then(res => {
        console.log(JSON.stringify(res))
        expect(res.tickets.length).to.be.equal(1)
        expect(res.tickets[0].customerId).to.be.equal(4188)
      })
      .catch(err => {
        console.log(err.data)
        throw err
      })
  })
})
