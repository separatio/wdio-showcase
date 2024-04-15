import { expect } from '@wdio/globals'
import acceptCookies from '../../helpers/acceptCookies.ts'
import { Key } from 'webdriverio'
import { newProducts } from '../../data/newProductsData.ts'

// following arrange/ act/ assert pattern
describe('search', () => {
  before(async () => {
    await browser.url('/de')
    await acceptCookies()
  })

  newProducts.forEach((filter) => {
    it(`apply ${filter.classificationClassName} and ${filter.gender} filters`, async () => {
      // arrange
      await browser.url('/de')

      await $('a=PARFUM').moveTo()
      await $('a=PARFUM').click()
      await $('span[data-testid="header-component-item--logo"]').moveTo()
      await $('h1=Parfüm & Düfte').waitForDisplayed()

      await $('div[data-testid="flags"]').click()
      await $('a[href="/de/c/parfum/01?q=:relevance:flags:computedNewFlag"]').waitForClickable()
      await $('a[href="/de/c/parfum/01?q=:relevance:flags:computedNewFlag"]').click()
      await browser.keys([Key.Escape])
      await $('button=NEU').waitForDisplayed()

      // next I need to apply filter for classificationClassName and gender
      await $('div=Produktart').click()
      const selector = `//a/div/div[contains(text(), '${filter.classificationClassName}')]`;
      await $(selector).waitForClickable()
      await $(selector).moveTo()
      await $(selector).click()
      await browser.keys([Key.Escape])

      await $('div=Für Wen').click()
      await $(`div=${filter.gender}`).moveTo()
      await $(`div=${filter.gender}`).click()
      await browser.keys([Key.Escape])
      await $(`button=${filter.gender}`).waitForDisplayed()

      const newItemsAmountWithFilters = await $$('div[data-testid="product-eyecatcher"]=NEU').length

      expect(newItemsAmountWithFilters).toBe(filter.amount)
    })
  })
})
