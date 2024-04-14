import { expect } from '@wdio/globals'
import acceptCookies from '../../helpers/acceptCookies.ts'

// following arrange/ act/ assert pattern
describe('search', () => {
  before(async () => {
    await browser.url('/')
    await acceptCookies()
  })

  it('new products', async () => {
    // arrange
    await $('a=PARFUM').moveTo()
    await $('a=PARFUM').click()

    await driver.debug()
  })
})
