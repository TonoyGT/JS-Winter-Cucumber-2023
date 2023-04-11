const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require('../../Pages/Hotels/Homepage');
const SignupPage = require('../../Pages/Hotels/SignupPage');
const PrivacyPage = require("../../Pages/Hotels/PrivacyPage");
const TCPage = require("../../Pages/Hotels/TCPage");


const homepage = new Homepage();
const signuppage = new SignupPage();
const tcpage = new TCPage();
const privacypage = new PrivacyPage();


Then(/^I click on Travelers$/, async function () {
    await homepage.clicktravelers();
});

Then(/^I Select “Children” as 2$/, async function () {
    await homepage.addChildren(2);
});

Then(/^I Verify Children-age dropdown are 2$/, async function () {
    const dropDowns = await homepage.childrenAgeDropdownCount();
    expect(dropDowns, 'DropDowns Are NOT Two').to.equal(2);   
});

Then(/^I Verify Plus Button is enabled$/, async function () {
    const plusButton = await homepage.isChildrenPlusButtonEnable();
    expect(plusButton, 'Children Plus Button NOT Enable').to.be.true; 
});

Then(/^I Verify Minus Button is enabled$/, async function () {
    const minusButton = await homepage.isChildrenMinusButtonEnable();
    expect(minusButton, 'Children Minus Button NOT Enable').to.be.true;
});

Then(/^I Select “Children” as 6$/, async function () {
    await homepage.addChildren(4);
});

Then(/^I Verify Children-age dropdown are 6$/, async function () {
    const dropDowns = await homepage.childrenAgeDropdownCount();
    expect(dropDowns, 'DropDowns Are NOT Six').to.equal(6);
});

Then(/^I Verify Plus Button is disabled$/, async function () {
    const plusButton = await homepage.isChildrenPlusButtonEnable();
    expect(plusButton, 'Children Plus Button Is Enable').to.be.false;
});

Then(/^I Verify Minus Button is enabled$/, async function () {
    const minusButton = await homepage.isChildrenMinusButtonEnable();
    expect(minusButton, 'Children Minus Button NOT Enable').to.be.true;
});

Then(/^I Select “Children” as 5$/, async function () {
    await homepage.removeChildren(1);
});

Then(/^I Verify Children-age dropdown are 5$/, async function () {
    const dropDowns = await homepage.childrenAgeDropdownCount();
    expect(dropDowns, 'DropDowns Are NOT Six').to.equal(5);
});

Then(/^I Verify Plus Button is enabled$/, async function () {
    const plusButton = await homepage.isChildrenPlusButtonEnable();
    expect(plusButton, 'Children Plus Button NOT Enable').to.be.true;
});

Then(/^I Verify Minus Button is enabled$/, async function () {
    const minusButton = await homepage.isChildrenMinusButtonEnable();
    expect(minusButton, 'Children Minus Button NOT Enable').to.be.true;
});

Then(/^I Select “Children” as 0$/, async function () {
    await homepage.removeChildren(5);
});

Then(/^I Verify Children-age dropdown is NOT displayed$/, async function () {
    const dropDowns = await homepage.isChildrenAgeDropDownDisplayed();
    expect(dropDowns, 'DropDowns Are NOT Six').to.be.false;
});

Then(/^I Verify Plus Button is enabled$/, async function () {
    const plusButton = await homepage.isChildrenPlusButtonEnable();
    expect(plusButton, 'Children Plus Button Is NOT Enable').to.be.true;
});

Then(/^I Verify Minus Button is disabled$/, async function () {
    const minusButton = await homepage.isChildrenMinusButtonEnable();
    expect(minusButton, 'Children Minus Button Is Enable').to.be.false;
});

Then(/^I Select “Adults as 6$/, async function () {
    await homepage.addAdult(4);
});

Then(/^I Select “Children” as 3$/, async function () {
    await homepage.addChildren(3);
});

Then(/^I Select first child age: 4$/, async function () {
    await homepage.inputeChild1Age();
});

Then(/^I Select second child age: Under 1$/, async function () {
    await homepage.inputeChild2Age();
});

Then(/^I Select third child age: 7$/, async function () {
    await homepage.inputeChild3Age();
});

Then(/^I Click Done$/, async function () {
    await homepage.clickTravelersDoneButton();
});

Then(/^I Verify total number of Travelers is sum of adults and children as same as selected on step #3 and #4$/, async function () {
    const totalPersons = await homepage.totalRoomPersonsCount();
    const totalTavelers = await homepage.totalTravelersCount();
    expect(totalPersons, 'Travelers Count NOT Equal').to.equal(totalTavelers);
    
});