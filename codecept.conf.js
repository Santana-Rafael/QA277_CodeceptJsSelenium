exports.config = {
  tests: './*_test.js',
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
		  browserName: 'chrome',
		  chromeOptions: {
			  args: [ /*"--headless", "--disable-gpu", "--window-size=1200,1000",*/ "--no-sandbox"]
		  }
	  }, 
	  url: 'https://juegos-staging.personal.com.ar',
      waitForTimeout: 3000,
	  browser: 'chrome',
      windowSize: '1440x900',
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