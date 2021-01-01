module.exports = {
  "Basic google test": function (browser) {
    browser
      .url("http://www.google.com")
      .waitForElementVisible("body") // wait for 10000ms by default
      .end()
  },
}
