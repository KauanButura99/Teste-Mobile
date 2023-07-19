const { join } = require('path')

//configurando server
exports.config = {
    hostname: '127.0.0.1', //se caso o localhost não funcionar use este IP
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-qe",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './app/lojaEbac.apk'),
        "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
    }],
    waitForTimeout: 10000,
    mochaOpts: {
        timeout: 50000
    }
}