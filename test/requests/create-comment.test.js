import { expect } from 'chai'
import config from '../config.test'
import api from '../../src'

describe('tests for create comment', () => {
  it('should response without error', function () {
    this.timeout(20000)
    const service = api.service({ auth: config })

    const id = 10
    const params = {
      message: 'What did you say about my mame ?',
      messageId: '6785309876784291',
      user: {
        id: 4188,
        phone: '+380931473433',
        chatId: '23422567'
      },
      channel: {
        type: 'telegram',
        uid: 'hellocashbackua',
      },
      source: 'bot'
    }

    return service.createComment(id, params)
      .then(res => {
        console.log(JSON.stringify(res))
        expect(res.ticket.customerId).to.be.equal(params.user.id)
      })
      .catch(err => {
        console.log(err.data)
        throw err
      })
  })
})
