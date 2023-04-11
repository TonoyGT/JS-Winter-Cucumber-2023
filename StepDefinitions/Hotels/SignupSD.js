const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require('../../Pages/Hotels/Homepage');
const SignupPage = require('../../Pages/Hotels/SignupPage');
const TCpage = require("../../Pages/Hotels/TCPage");
const TCPage = require("../../Pages/Hotels/TCPage");
const PrivacyPage = require("../../Pages/Hotels/PrivacyPage");
const FeedbackPage = require("../../Pages/Hotels/FeedbackPage")


const homepage = new Homepage();
const signuppage = new SignupPage();
const tcpage = new TCPage();
const privacypage = new PrivacyPage();
const feedbackpage = new FeedbackPage();



Given(/^I Lunch hotels.com homepage$/, async function () {

    await browser.url('https://www.hotels.com/');
});

Given(/^I click on Sign In Button$/, async function () {

    await signuppage.clickSignInButton();
    await signuppage.waitForSignInMenu();
});

Given(/^I click on Sign Up Button$/, async function () {

    await signuppage.clickSignUpButton();
    await signuppage.waitForSignUpForm();
});

Then(/^I enter "(.+)" as Email$/, async function (data) {

    await signuppage.enterEmail(data);
});

Then(/^I enter "(.+)" as First Name$/, async function (data) {

    await signuppage.enterFirstName(data);
});

Then(/^I enter "(.+)" as Last Name$/, async function (data) {

    await signuppage.enterLastName(data);
});

Then(/^I enter "(.+)" as Password$/, async function (data) {

    await signuppage.enterPassword(data);
});

Then(/^I verify Email Error Is Displayed$/, async function () {

    const isErrorDisplay = await signuppage.isEmailErrorDisplayed();
    expect(isErrorDisplay, 'Email Error NOT Desplayed').to.be.true;
});

Then(/^I verify First Name Error Is Displayed$/, async function () {

    const isErrorDisplay = await signuppage.isFirstNameErrorDisplayed();
    expect(isErrorDisplay, 'First Name Error NOT Desplayed').to.be.true;
});

Then(/^I verify Last Name Error Is Displayed$/, async function () {

    const isErrorDisplay = await signuppage.isLastNameErrorDisplayed();
    expect(isErrorDisplay, 'Last Name Error NOT Desplayed').to.be.true;
});

Then(/^I verify Keep Me Sign In Checkbox is Displayed$/, async function () {

    const isCheckboxDisplayed = await signuppage.isKeepMeSigninCheckboxDisplayed();
    expect(isCheckboxDisplayed, 'Keep Me Sign In Checkbox is NOT Displayed').to.be.true;
});

Then(/^I verify Keep Me Sign In Checkbox is Enabled$/, async function () {

    const isCheckboxEnabled = await signuppage.isKeepMeSigninCheckboxEnable();
    expect(isCheckboxEnabled, 'Keep Me Sign In Checkbox is NOT Enabled').to.be.true;
});

Then(/^I verify Continue Button is Displayed$/, async function () {

    const isButtonDisplayed = await signuppage.isContinueButtonDisplayed();
    expect(isButtonDisplayed, 'Continue Button Is NOT Displayed').to.be.true;
});

Then(/^I verify Continue Button is NOT Enabled$/, async function () {

    const isButtonEnabled = await signuppage.isContinueButtonEnable();
    expect(isButtonEnabled, 'Continue Button Is Enabled').to.be.false;
});

Then(/^I Click on TC Link$/, async function () {

    await signuppage.clickTCLink();
    await browser.pause(3000);
});

Then(/^I Verify "Terms & Conditions" Is Open in A New Tab$/, async function () {

    const allHandles = await signuppage.isTcOpenInNewWindow();
    expect(allHandles.length, '"Terms & Conditions" Is NOT Open in A New Tab').to.equal(2);

});

Then(/^I Verify Revised date Is In Correct Format$/, async function () {

    const allHandles = await feedbackpage.switchWindow();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('terms-of-service')) {
            break;
        }
    }
    
    const revisedDate = await tcpage.currentDateRead();
    const splitrdate = revisedDate.split(' ');
    const cdate = (splitrdate[2]).toString();
    expectedDateFormat = 'MM/dd/yy';
    const isDateInExpectedformat = moment(cdate, expectedDateFormat).isValid();
   
    expect(isDateInExpectedformat, 'Date Is NOT In Correct Format').to.be.true;

});

Then(/^I Click on Privacy Link$/, async function () {

    const allHandles = await feedbackpage.switchWindow();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('signup?')) {
            break;
        }
    }

    await signuppage.clickprivacyLink();
    await browser.pause(3000);
});

Then(/^I Verify "Privacy" Is Open in A New Tab$/, async function () {

    const allHandles = await signuppage.isTcOpenInNewWindow();
    expect(allHandles.length, '"Terms & Conditions" Is NOT Open in A New Tab').to.equal(3);

});

Then(/^I Verify Updated date Is In Correct Format$/, async function () {

    const allHandles = await feedbackpage.switchWindow();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('customer_care')) {
            break;
        }
    }
    
    const updatedDate = await privacypage.currentDateRead();
    const splitrdate = updatedDate.split(' ');
    const cdate = (splitrdate[2]+' '+splitrdate[3]+' '+splitrdate[4]);
    console.log(cdate);
    expectedDateFormat = 'DD MMMM, YYYY';
    const isDateInExpectedformat = moment(cdate, expectedDateFormat).isValid();

    expect(isDateInExpectedformat, 'Date Is NOT In Correct Format').to.be.true;
    

});