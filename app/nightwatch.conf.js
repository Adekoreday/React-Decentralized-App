module.exports = {
  src_folders: [],

  test_settings: {
    default: {
      launch_url: "http://google.com",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots: {
        enabled: true,
        path: "./",
      },
      test_workers: {
        enabled: true,
        workers: "auto",
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      globals: {
        abortOnAssertionFailure: false,
        waitForConditionPollInterval: 300,
        waitForConditionTimeout: 10000,
        retryAssertionTimeout: 5000,
      },
    },
    selenium: {
      // Selenium Server is running locally and is managed by Nightwatch
      selenium: {
        start_process: true,
        port: 4444,
        server_path: require("selenium-server").path,
        cli_args: {
          "webdriver.chrome.driver": require("chromedriver").path,
          "webdriver.gecko.driver": require("geckodriver").path,
          "webdriver.ie.driver": process.platform === "win32" ? require("iedriver").path : "",
        },
      },
      webdriver: {
        start_process: false,
      },
    },

    "selenium.chrome": {
      extends: "selenium",
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: false,
        },
      },
    },

    "selenium.firefox": {
      extends: "selenium",
      desiredCapabilities: {
        browserName: "firefox",
      },
    },

    "selenium.ie": {
      extends: "selenium",
      desiredCapabilities: {
        browserName: "internet explorer",
      },
    },
  },
}
