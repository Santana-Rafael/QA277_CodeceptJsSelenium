exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  plugins: {
	  wdio: {
		  enabled: true,
		  services: ['selenium-standalone']
	  }
  },
  helpers: {
    WebDriver: {
      desiredCapabilities: {
		  "acceptInsecureCerts": true,
		  // chromeOptions: { args: [  "--headless", "--disable-gpu", "--window-size=1024,768", "--no-sandbox"]}
	  }, 
	  url: 'https://juegos-staging.personal.com.ar',
      waitForTimeout: 3000,
	  browser: 'firefox',
      windowSize: '1024,768',
	  restart: false
      
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: false,
  mocha: {},
  name: '.bin'
}