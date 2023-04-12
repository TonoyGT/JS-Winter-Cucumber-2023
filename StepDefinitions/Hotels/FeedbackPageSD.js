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


When(/^I Click “Feedback”$/, async function () {
    await homepage.waitForSignInMenu();
    await homepage.clickFeedbackButton();
});

When(/^I Click on Submit button$/, async function () {
    
    await feedbackpage.switchWindow();
    await feedbackpage.clickSubmitButton();
    
});

When(/^I Verify error message is displayed (Please fill in the required information highlighted below.)$/, async function () {
   
    const errorMessage = await feedbackpage.isErrorMessageDisplayed();
    expect(errorMessage, 'Error Message Is NOT Displayed').to.be.true;
});

When(/^I Verify red-dotted line is displayed around star-section.$/, async function () {
   
    const redDotedLine = await feedbackpage.isRedDotedLineDisplayed();
    expect(redDotedLine, 'Red Doted Line Is NOT Displayed').to.be.true;
});

When(/^I Select any star-rating$/, async function () {

    await feedbackpage.switchWindow();
    await feedbackpage.selectStarRating();    
});

When(/^I Enter any comments$/, async function () {

    await feedbackpage.enterComments();   
});

When(/^I Select any option for How likely are you to return to Hotels.com?$/, async function () {
    await feedbackpage.willYouReturnSelect(); 

});

When(/^I Select any answer for “Prior to this visit, have you ever booked on Hotels.com?”$/, async function () {
    await feedbackpage.clickOnPriorAnswer();    
});

When(/^I Select any answer for ”Did you accomplish what you wanted to do on this page?”$/, async function () {
    await feedbackpage.clickOnDidYouAnswer();    
});

When(/^I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function () {
   
    const thankyou = await feedbackpage.isThankyouFeedbackDisplayed();
    expect(thankyou, 'Red Doted Line Is NOT Displayed').to.be.true;
});

