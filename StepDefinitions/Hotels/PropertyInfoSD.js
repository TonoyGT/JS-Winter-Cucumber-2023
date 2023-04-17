const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require('../../Pages/Hotels/Homepage');
const SignupPage = require('../../Pages/Hotels/SignupPage');
const TCpage = require("../../Pages/Hotels/TCPage");
const TCPage = require("../../Pages/Hotels/TCPage");
const PrivacyPage = require("../../Pages/Hotels/PrivacyPage");
const FeedbackPage = require("../../Pages/Hotels/FeedbackPage");
const PropertyInfo = require("../../Pages/Hotels/PropertyInfo");


const homepage = new Homepage();
const signuppage = new SignupPage();
const tcpage = new TCPage();
const privacypage = new PrivacyPage();
const feedbackpage = new FeedbackPage();
const propertyinfo = new PropertyInfo();




When(/^I Click on “List your property”$/, async function () {

   await homepage.clickListYourProperty();
});

When(/^I Verify “What would you like to list” is displayed$/, async function () {
   await propertyinfo.switchWindow();
   const isLikeToListDisplayed = await propertyinfo.isLikeToListDisplayed();
   expect(isLikeToListDisplayed, '“What would you like to list?” NOT Displayed').to.be.true;
});

When(/^I Verify “Lodging“ and “Private residence“ options are displayed$/, async function () {

   const isLodgingDisplayed = await propertyinfo.isLodgingDisplayed();
   expect(isLodgingDisplayed, '“Lodging“ NOT Displayed').to.be.true;

   const isPrivateResidenceDisplayed = await propertyinfo.isPrivateResidenceDisplayed();
   expect(isPrivateResidenceDisplayed, '“Private residence“ NOT Displayed').to.be.true;
});

When(/^I Click on “Private residence“$/, async function () {

   await propertyinfo.clickPrivateResidence();

});

When(/^I Verify ”Step 1 of 3” is displayed$/, async function () {

   const isStep1Of3Displayed = await propertyinfo.isStep1Of3Displayed();
   expect(isStep1Of3Displayed, '”Step 1 of 3” NOT Displayed').to.be.true;
});
When(/^I Verify “See how much you could earn!” is displayed$/, async function () {

   const isHowmuchEarnDisplayed = await propertyinfo.isHowmuchEarnDisplayed();
   expect(isHowmuchEarnDisplayed, '“See how much you could earn!” NOT Displayed').to.be.true;
});

When(/^I Enter “4“ as bedroom$/, async function () {

   await propertyinfo.addBedroom(4);
});

When(/^I Enter “2.5“ as bathroom$/, async function () {

   await propertyinfo.addBathroom(3);
});

When(/^I Click on “Next” button$/, async function () {

   await propertyinfo.clickPropertyInfoNextButton();
});

When(/^I Verify ”Step 2 of 3” is displayed$/, async function () {

   const isStep2Of3Displayed = await propertyinfo.isStep2Of3Displayed();
   expect(isStep2Of3Displayed, '”Step 2 of 3” NOT Displayed').to.be.true;
});

When(/^I Verify “Where is your property located” is displayed$/, async function () {

   const isWhereIsYourPropertyLocatedDisplayed = await propertyinfo.isWhereIsYourPropertyLocatedDisplayed();
   expect(isWhereIsYourPropertyLocatedDisplayed, '“Where is your property located?” NOT Displayed').to.be.true;
});

When(/^I Verify graph is displayed$/, async function () {

   const isGraphDisplayed = await propertyinfo.isGraphDisplayed();
   expect(isGraphDisplayed, 'Graph NOT Displayed').to.be.true;
});

When(/^I Verify pin in graph is displayed$/, async function () {

   const isGraphPinDisplayed = await propertyinfo.isGraphPinDisplayed();
   expect(isGraphPinDisplayed, 'Graph Pin NOT Displayed').to.be.true;
});

When(/^I Verify “Move the pin to adjust the location of your property.“ is displayed below graph$/, async function () {

   const isMoveThePinTextDisplayed = await propertyinfo.isMoveThePinTextDisplayed();
   expect(isMoveThePinTextDisplayed, 'Graph Pin NOT Displayed').to.be.true;
});

When(/^I Enter “121” in address$/, async function () {

   await propertyinfo.inputeAddress(121);
});

When(/^I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion$/, async function () {

   await propertyinfo.selectAddress();
});