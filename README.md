este automatizado Mobile
Testes foram feitos no Apk da Woocommerce. Com intuito de validar o login da loja EBAC- SHOP

Pre-requisites
WSL2 Precisa-se estar ativado em sua máquina

Android Studio: https://developer.android.com/studio

Vs Code: https://code.visualstudio.com/download

Appium Server GUI: https://github.com/appium/appium-desktop

JDK 20: https://www.oracle.com/br/java/technologies/downloads/

Appium Inspector: https://github.com/appium/appium-inspector/releases

APK Woocomerce Versão 7.3.1: https://github.com/woocommerce/woocommerce-android/releases

Installation
Wdio

 npm init wdio .
exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-qe",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './App/lojaEbac.apk'),
        "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
        //"appium:appWaitActivity": "com.woocommerce.android/.ui.main.MainActivity"
    }],
    waitforTimeout: 10000,
    mochaOpts: {
        timeout: 50000
    },
    connectionRetryTimeout: 120000,
    //services: ['appium'],
    framework: 'mocha'
Join

 npm install join
const { join } = require('path')
Running Tests
Comando para rodar em sua máquina

  npm test
Documentation
Documentation
