import { expect } from 'chai'
import config from '../config.test'
import api from '../../src'

const params = {
  firstName: '',
  lastName: '',
  source: 'bot',
  phones: [
    {
      value: '+380931112233'
    }
  ],
  groups: [
    {
      id: 2 // Test Project Id
    }
  ]
}

describe('tests resolve user request', () => {
  it('should response without error', function () {
    this.timeout(20000)
    const service = api.service({ auth: config })
    return service.resolveUser(params)
      .then(res => {
        console.log('test answer', JSON.stringify(res))
        expect(res.id).to.be.a('number')
      })
      .catch(err => {
        console.log(err.data)
        throw err
      })
  })
})
