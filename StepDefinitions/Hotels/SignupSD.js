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



When(/^I Lunch hotels.com homepage$/, async function () {

    await browser.url('https://www.hotels.com/');
});

When(/^I Click on Sign In link$/, async function () {

    await signuppage.clickSignInLink();
    await signuppage.waitForSignInMenu();
});

When(/^I Click on Sign in button$/, async function () {

    await signuppage.clickSignInButton();
});

When(/^I click on Sign Up Button$/, async function () {

    await signuppage.clickSignUpButton();
    await signuppage.waitForSignUpForm();
});

When(/^I enter "(.+)" as Email$/, async function (data) {

    await signuppage.enterEmail(data);
});

When(/^I enter "(.+)" as First Name$/, async function (data) {

    await signuppage.enterFirstName(data);
});

When(/^I enter "(.+)" as Last Name$/, async function (data) {

    await signuppage.enterLastName(data);
});

When(/^I enter "(.+)" as Password$/, async function (data) {

    await signuppage.enterPassword(data);
});

When(/^I Enter Invalid Email Address$/, async function () {

    await signuppage.enterInvalidEmailInSignIn('@675!!');
});

When(/^I verify Email Error Is Displayed$/, async function () {

    const isErrorDisplay = await signuppage.isEmailErrorDisplayed();
    expect(isErrorDisplay, 'Email Error NOT Desplayed').to.be.true;
});

When(/^I verify First Name Error Is Displayed$/, async function () {

    const isErrorDisplay = await signuppage.isFirstNameErrorDisplayed();
    expect(isErrorDisplay, 'First Name Error NOT Desplayed').to.be.true;
});

When(/^I verify Last Name Error Is Displayed$/, async function () {

    const isErrorDisplay = await signuppage.isLastNameErrorDisplayed();
    expect(isErrorDisplay, 'Last Name Error NOT Desplayed').to.be.true;
});

When(/^I verify Keep Me Sign In Checkbox is Displayed$/, async function () {

    const isCheckboxDisplayed = await signuppage.isKeepMeSigninCheckboxDisplayed();
    expect(isCheckboxDisplayed, 'Keep Me Sign In Checkbox is NOT Displayed').to.be.true;
});

When(/^I verify Keep Me Sign In Checkbox is Enabled$/, async function () {

    const isCheckboxEnabled = await signuppage.isKeepMeSigninCheckboxEnable();
    expect(isCheckboxEnabled, 'Keep Me Sign In Checkbox is NOT Enabled').to.be.true;
});

When(/^I verify Continue Button is Displayed$/, async function () {

    const isButtonDisplayed = await signuppage.isContinueButtonDisplayed();
    expect(isButtonDisplayed, 'Continue Button Is NOT Displayed').to.be.true;
});

When(/^I verify Continue Button is NOT Enabled$/, async function () {

    const isButtonEnabled = await signuppage.isContinueButtonEnable();
    expect(isButtonEnabled, 'Continue Button Is Enabled').to.be.false;
});

When(/^I Click on TC Link$/, async function () {

    await signuppage.clickTCLink();
});

When(/^I Verify "Terms & Conditions" Is Open in A New Tab$/, async function () {

    const allHandles = await signuppage.isTcOpenInNewWindow();
    expect(allHandles.length, '"Terms & Conditions" Is NOT Open in A New Tab').to.equal(2);

});

When(/^I Verify Revised date Is In Correct Format$/, async function () {

    await tcpage.switchWindow();

    const revisedDate = await tcpage.currentDateRead();
    const splitrdate = revisedDate.split(' ');
    const cdate = (splitrdate[2]).toString();
    expectedDateFormat = 'MM/dd/yy';
    const isDateInExpectedformat = moment(cdate, expectedDateFormat).isValid();

    expect(isDateInExpectedformat, 'Date Is NOT In Correct Format').to.be.true;

});

When(/^I Click on Privacy Link$/, async function () {

    await signuppage.switchWindow();
    await signuppage.clickprivacyLink();
});

When(/^I Verify "Privacy" Is Open in A New Tab$/, async function () {

    const allHandles = await signuppage.isTcOpenInNewWindow();
    expect(allHandles.length, '"Terms & Conditions" Is NOT Open in A New Tab').to.equal(3);

});

When(/^I Verify Updated date Is In Correct Format$/, async function () {

    await privacypage.switchWindow();

    const updatedDate = await privacypage.currentDateRead();
    const splitrdate = updatedDate.split(' ');
    const cdate = (splitrdate[2] + ' ' + splitrdate[3] + ' ' + splitrdate[4]);
    console.log(cdate);
    expectedDateFormat = 'DD MMMM, YYYY';
    const isDateInExpectedformat = moment(cdate, expectedDateFormat).isValid();

    expect(isDateInExpectedformat, 'Date Is NOT In Correct Format').to.be.true;


});

When(/^I Click on Continue Button$/, async function () {

    await signuppage.clickContinueButtonInSignIn();
});

When(/^I Verify Invalid error message is displayed$/, async function () {

    const isInvalidEmailErrorDisplayed = await signuppage.isInvalidEmailErrorDisplayed();
    expect(isInvalidEmailErrorDisplayed, 'Invalid Emaill Error NOT Displayed').to.be.true;

});