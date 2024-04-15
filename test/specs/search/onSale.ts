import { expect } from '@wdio/globals'

// following arrange/ act/ assert pattern
describe.skip('search', () => {
  it('on sale products', async () => {
    // arrange
    await $('a=PARFUM').click()
  })
})
