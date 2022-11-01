const allure = require('allure-commandline');
const {DATA} = require('../../test-settings.js');

// var remoteDebugProxy =  DATA.CLOUD['momentum.deviceList'][0] + 2000;
// var remoteDebugProxys = remoteDebugProxy.toString();

exports.config = {
    hostname: DATA.LOCAL['hostname'],
    port: DATA.LOCAL['port'],
    path: DATA.LOCAL['path'],
    protocol: DATA.LOCAL['protocol'],
    specs: [
        './stadium-goods/cucumber-test/features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: "iOS",
        "appium:app": "/Users/dev/Desktop/Appium/build/Release-iphonesimulator/Appium.app",
        "appium:automationName": "XCUITest",
        "appium:autoAcceptAlerts": true,
        "appium:language": "en",
        "appium:locale": "en",
        // "appium:fullReset": true,
        "appium:noReset": true,
        "appium:deviceName": "iPhone 13",
        "appium:platformVersion": "15.0",
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    framework: 'cucumber',
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        profile: [],
        require: [
            './stadium-goods/cucumber-test/steps/**/*.js'
        ],
        snippetSyntax: undefined,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 20000,
        retry: 0
    },
    reporters: [
        [
          'allure',
          {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
          }
        ]
      ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
            await browser.closeApp();
            driver.deleteSession();   
        }
    },
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                15000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
