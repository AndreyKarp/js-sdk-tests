import { expect } from 'chai'
import config from '../config.test'
import api from '../../src'

const params = {
  source: 'bot',
  subject: 'dont touch, cowboy!!!!',
  message: 'Hello boy',
  messageId: '6785309876784290',
  user: {
    id: 4188,
    phone: '+380931473433',
    chatId: '23422567'
  },
  groupId: 2,
  channel: {
    type: 'telegram',
    uid: 'hellocashbackua',
  }
}

describe('tests create ticket request', () => {
  it('should response without error', function () {
    this.timeout(20000)
    const service = api.service({ auth: config })
    return service.createTicket(params)
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
