import { expect } from 'chai'
import config from '../config.test'
import api from '../../src'

describe('tests for update comment', () => {
  it('should response without error', function () {
    this.timeout(20000)
    const service = api.service({ auth: config })

    const id = 103
    const params = {
      attributes: {
        deliveryStatus: 'sent'
      }
    }

    return service.updateComment(id, params)
      .then(res => {
        console.log(JSON.stringify(res))
        expect(res.id).to.be.equal(103)
        expect(res.deliveryStatus).to.be.equal('sent')
      })
      .catch(err => {
        console.log(err.data)
        throw err
      })
  })
})
