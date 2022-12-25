module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    frameworks: ['qunit'],

    //plugins
    plugins: ['karma-qunit', 'karma-browserstack-launcher'],

    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'tests/*.js'
    ],

    // test results reporter to use
    reporters: ['progress', 'BrowserStack'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    logLevel: config.LOG_INFO,

    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY
    },

    // define browsers
    customLaunchers: {
      bs_chrome_windows: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: '72.0',
        os: 'Windows',
        os_version: '10'
      }
    },

    browsers: ['bs_chrome_windows'],
  })
}
