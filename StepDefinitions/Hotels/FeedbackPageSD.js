const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require('../../Pages/Hotels/Homepage');
const SignupPage = require('../../Pages/Hotels/SignupPage');
const PrivacyPage = require("../../Pages/Hotels/PrivacyPage");
const TCPage = require("../../Pages/Hotels/TCPage");
const FeedbackPage = require("../../Pages/Hotels/FeedbackPage");


const homepage = new Homepage();
const signuppage = new SignupPage();
const tcpage = new TCPage();
const privacypage = new PrivacyPage();
const feedbackpage = new FeedbackPage();


Then(/^I Click “Feedback”$/, async function () {
    await homepage.waitForSignInMenu();
    await homepage.clickFeedbackButton();
    await browser.pause(5000);
    
});

Then(/^I Click on Submit button$/, async function () {
    
    const allHandles = await feedbackpage.switchWindow();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('directword')) {
            break;
        }
    }
    await feedbackpage.clickSubmitButton();
    await browser.pause(5000);
    
});

Then(/^I Verify error message is displayed (Please fill in the required information highlighted below.)$/, async function () {
   
    const errorMessage = await feedbackpage.isErrorMessageDisplayed();
    expect(errorMessage, 'Error Message Is NOT Displayed').to.be.true;
});

Then(/^I Verify red-dotted line is displayed around star-section.$/, async function () {
   
    const redDotedLine = await feedbackpage.isRedDotedLineDisplayed();
    expect(redDotedLine, 'Red Doted Line Is NOT Displayed').to.be.true;
});

Then(/^I Select any star-rating$/, async function () {

    const allHandles = await feedbackpage.switchWindow();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('directword')) {
            break;
        }
    }
    await feedbackpage.selectStarRating();    
});

Then(/^I Enter any comments$/, async function () {

    await feedbackpage.enterComments();   
});

Then(/^I Select any option for How likely are you to return to Hotels.com?$/, async function () {
    await feedbackpage.willYouReturnSelect(); 

});

Then(/^I Select any answer for “Prior to this visit, have you ever booked on Hotels.com?”$/, async function () {
    await feedbackpage.priorAnswer();    
});

Then(/^I Select any answer for ”Did you accomplish what you wanted to do on this page?”$/, async function () {
    await feedbackpage.didYouAnswer();    
});

Then(/^I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function () {
   
    const thankyou = await feedbackpage.isThankyouFeedbackDisplayed();
    expect(thankyou, 'Red Doted Line Is NOT Displayed').to.be.true;
});

