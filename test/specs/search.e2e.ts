import { expect } from '@wdio/globals'
import acceptCookies from '../helpers/acceptCookies.ts'

let cookies

// following arrange/ act/ assert pattern
describe.skip('search', () => {
  before(async () => {
    await browser.url('/')
    await acceptCookies()

    cookies = browser.getCookies()
  })

  it('searches for a product', async () => {
    // arrange
    const searchInput = $('#search')
    const searchButton = $('button=Suchen')
    const searchQuery = 'shirt'

    // act
    await searchInput.setValue(searchQuery)
    await searchButton.click()

    // assert
    const searchResults = await browser.getTitle()
    expect(searchResults).toContain(searchQuery)
  })
})
