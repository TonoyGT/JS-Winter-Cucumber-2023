WEBDRIVER-IO DOCS:
    https://webdriver.io/docs/gettingstarted


EXECUTION:

    To run all feature files:
        npx wdio wdio.conf.js
    
    To run a specific feature file:
        npx wdio wdio.conf.js --spec ./feature-file-relative-path
    eg:
        npx wdio wdio.conf.js --spec ./Tests/Facebook/signUp.feature

    To run scenario using tagName:
        npx wdio wdio.conf.js --cucumberOpts.tagExpression '@tagName'

    eg:
        npx wdio wdio.conf.js --cucumberOpts.tagExpression '@test'
        npx wdio wdio.conf.js --cucumberOpts.tagExpression '@login-1'
        npx wdio wdio.conf.js --cucumberOpts.tagExpression '@test and @invalidLogin'
                (run scenario which are having test-tag AND invalidLogin-tag)
        npx wdio wdio.conf.js --cucumberOpts.tagExpression '@test or @invalidLogin'
                (run scenario which are either having test-tag or invalidLogin-tag)
        npx wdio wdio.conf.js --cucumberOpts.tagExpression 'not @test'
                (run scenario which are NOT having test-tag)

ALLURE REPORT:

    Add Allure report:
        npm install @wdio/allure-reporter --save-dev
        npm install -g allure-commandline --save-dev

    in wdio.conf.js:
        reporters: [['allure',
                        {
                            outputDir: 'Reports/allure-results',
                            disableWebdriverStepsReporting: true,
                            useCucumberStepReporter: true,
                            disableWebdriverScreenReporting: false,
                        }
                ]],

    To generate Allure report:
        allure generate --clean <allure-results-path>
        eg: allure generate --clean Reports/allure-results
    
    To open allure report:
        allure open
        Note: make sure to be in the folder which contains allure-report
    
    To attach screenshot on failure in Allure report:
        in wdio.conf.js:
            in reports array, make sure to add property
                disableWebdriverScreenshotsReporting: false
            
            in afterStep function (under Cucumber Hooks):
                afterStep: async function (step, scenario, {error, duration, passed}, context) {
                    if (error) {
                        await browser.takeScreenshot();
                    }
                },

CROSS BROWSER TESTING:

    To install selenium-standalone:
        npm install @wdio/selenium-standalone-service --save-dev

    To add firefox-profile-services:
        npm install @wdio/firefox-profile-service --save-dev

    To use selenium-standalone as services:
        in wdio.conf.js:
                services: ['selenium-standalone'],

    To run testcases in cross-browser testing:
        in wdio.conf.js:
            capabilities: [{
                maxInstances: 5,
                browserName: 'chrome',
                acceptInsecureCerts: true
            },
            {
                maxInstances: 5,
                browserName: 'firefox',
                acceptInsecureCerts: true
            }],


BROWSER-STACK SET UP:

    WebDriver-IO Docs:
        https://webdriver.io/docs/browserstack-service

    Browser Stack Docs:
        https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/webdriverio
        OR
        Refer "Quick Integration Guide" or "Get Started" after login
    
    CAPABILITIES REFERRAL:
        https://www.browserstack.com/automate/capabilities

    To Add Browser Stack:
        npm install @wdio/browserstack-service --save-dev
    
        in wdio.conf.js:
            exports.config: {
                // ...
                user: 'usernameFromBrowserStack',
                key: 'accessKeyFromBrowserStack,
                ...
                ...
                ...
                services: [
                    ['browserstack', {
                        preferScenarioName: true
                    }]
                ],
                ...
                ...
                capabilities: [
                    {
                        maxInstances: 5,
                        browserName: 'Chrome',
                        'bstack:options': {
                        os: 'Windows',
                        osVersion: '11',
                        browserVersion: '103.0'
                        },
                        acceptInsecureCerts: true
                    },
                    {
                        maxInstances: 5,
                        browserName: 'Edge',
                        'bstack:options': {
                        os: 'Windows',
                        osVersion: '10',
                        browserVersion: '110.0'
                        },
                        acceptInsecureCerts: true
                    },
                    {
                        maxInstances:5,
                        browserName: 'Chrome',
                        'bstack:options': {
                        os: 'OS X',
                        osVersion: 'Ventura',
                        browserVersion: 'latest'
                        },
                        acceptInsecureCerts: true
                    }
                ],
                ...
                ...
                ...
            }



JENKINS SET UP:

    Jenkins Web Portal:
        https://www.jenkins.io

    Verify if Java is in the machine:
        1. open terminal (Mac) or git bash (Windows)
        2. execute command: java -version
        3. If Java is not installed in machine, refer 
            for mac:
                https://medium.com/@kirebyte/using-homebrew-to-install-java-jdk11-on-macos-2021-4a90aa276f1c
            for windows:
                https://docs.oracle.com/goldengate/1212/gg-winux/GDRAD/java.htm#BGBFJHAB
        4. Go to https://www.jenkins.io/
        5. Tap on DOWNLOAD button
        6. Tap on respective operating system
        7. (for MAC) Open terminal, execute below commands :
                brew install jenkins-lts
                brew services start jenkins-lts
            (for WINDOWS), 
                Go to https://www.jenkins.io/download/
                Click on Windows option
                Follow steps from following screen
        8. Open "https://localhost:8080" in chrome window
        9.To Unlock Jenkins, perform below command in terminal/GitBash:
            cat <filePath>
        10. Submit password in the Jenkins-window
        11. Create admin account
        12. Set up Jenkins with Suggested Plugins

Add NodeJS Plugin in the Jenkins
    Go to Jenkins Home
    Click on Manage Jenkins
    Click on Plugin Manager (or Manage Plugin)
    Click on Available Plugin
    Search for NodeJS
    Add plugin (Install without restart)

    Go to Jenkins Home
    Click on Manage Jenkins
    Go to Global Tool Configuration
    Scroll to NodeJS
    Click "Add Node Js" button
    Name NodeJs
    Click "Apply" and "Save"
    Configure Job with NodeJs (created in Global Tool Configuration) under Build Environment
    --> Please Refer class recording for more details

Add Allure Plugin in the Jenkins
    Refer class recording using Manage Jenkins and Plugin Manager
    Go to Jenkins Home
    Click on Manage Jenkins
    Click on Plugin Manager (or Manage Plugin)
    Click on Available Plugin
    Search for allure
    Add plugin (Install without restart)

    Go to Jenkins Home
    Click on Manage Jenkins
    Go to Global Tool Configuration
    Scroll to "Allure Commandline"
    Click "Add Allure Commandline" button
    Name allure
    Click "Apply" and "Save"
    Configure Job with Allure (created in Global Tool Configuration) under Post-build Actions
    --> Please Refer class recording for more details

        