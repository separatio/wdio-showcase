import { expect } from '@wdio/globals'

// following arrange/ act/ assert pattern
describe.skip('search', () => {
  it('limited edition products', async () => {
    browser.url('/')
    await $('a=PARFUM').click()
  })
})
