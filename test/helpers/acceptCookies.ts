const acceptCookies = async () => {
  const acceptCookiesButton = $('button=Alle erlauben')
  acceptCookiesButton.waitForDisplayed({
    timeout: 20000,
    timeoutMsg: 'Cookies notice not displayed after 20 seconds.',
  })
  await acceptCookiesButton.click()
}

export default acceptCookies
