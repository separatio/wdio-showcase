import { expect } from '@wdio/globals'
import acceptCookies from '../helpers/acceptCookies.ts'

// following arrange/ act/ assert pattern
describe('cookies', () => {
  before(() => { })

  it('should set accepted cookies', async () => {
    // arrange
    await browser.url('/')
    const cookiesBeforeAccepting = await browser.getCookies()

    // act
    await acceptCookies()

    // assert
    const cookiesAfterAccepting = await browser.getCookies()

    // check if cookies are set
    // Note: this is a very basic check, you should check for specific cookies
    expect(cookiesAfterAccepting.length).toBeGreaterThan(
      cookiesBeforeAccepting.length
    )
  })
})
