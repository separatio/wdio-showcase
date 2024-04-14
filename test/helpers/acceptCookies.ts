const acceptCookies = async () => {
  const acceptCookiesButton = $('button=Alle erlauben')
  await acceptCookiesButton.click()
}

export default acceptCookies
