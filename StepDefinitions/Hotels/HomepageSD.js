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


When(/^I click on Travelers$/, async function () {
    await homepage.clicktravelers();
});

When(/^I Select “Children” as 2$/, async function () {
    await homepage.addChildren(2);
});

When(/^I Verify Children-age dropdown are 2$/, async function () {
    const dropDowns = await homepage.childrenAgeDropdownCount();
    expect(dropDowns, 'DropDowns Are NOT Two').to.equal(2);   
});

When(/^I Verify Plus Button is enabled$/, async function () {
    const plusButton = await homepage.isChildrenPlusButtonEnable();
    expect(plusButton, 'Children Plus Button NOT Enable').to.be.true; 
});

When(/^I Verify Minus Button is enabled$/, async function () {
    const minusButton = await homepage.isChildrenMinusButtonEnable();
    expect(minusButton, 'Children Minus Button NOT Enable').to.be.true;
});

When(/^I Select “Children” as 6$/, async function () {
    await homepage.addChildren(4);
});

When(/^I Verify Children-age dropdown are 6$/, async function () {
    const dropDowns = await homepage.childrenAgeDropdownCount();
    expect(dropDowns, 'DropDowns Are NOT Six').to.equal(6);
});

When(/^I Verify Plus Button is disabled$/, async function () {
    const plusButton = await homepage.isChildrenPlusButtonEnable();
    expect(plusButton, 'Children Plus Button Is Enable').to.be.false;
});

When(/^I Verify Minus Button is enabled$/, async function () {
    const minusButton = await homepage.isChildrenMinusButtonEnable();
    expect(minusButton, 'Children Minus Button NOT Enable').to.be.true;
});

When(/^I Select “Children” as 5$/, async function () {
    await homepage.removeChildren(1);
});

When(/^I Verify Children-age dropdown are 5$/, async function () {
    const dropDowns = await homepage.childrenAgeDropdownCount();
    expect(dropDowns, 'DropDowns Are NOT Six').to.equal(5);
});

When(/^I Verify Plus Button is enabled$/, async function () {
    const plusButton = await homepage.isChildrenPlusButtonEnable();
    expect(plusButton, 'Children Plus Button NOT Enable').to.be.true;
});

When(/^I Verify Minus Button is enabled$/, async function () {
    const minusButton = await homepage.isChildrenMinusButtonEnable();
    expect(minusButton, 'Children Minus Button NOT Enable').to.be.true;
});

When(/^I Select “Children” as 0$/, async function () {
    await homepage.removeChildren(5);
});

When(/^I Verify Children-age dropdown is NOT displayed$/, async function () {
    const dropDowns = await homepage.isChildrenAgeDropDownDisplayed();
    expect(dropDowns, 'DropDowns Are NOT Six').to.be.false;
});

When(/^I Verify Plus Button is enabled$/, async function () {
    const plusButton = await homepage.isChildrenPlusButtonEnable();
    expect(plusButton, 'Children Plus Button Is NOT Enable').to.be.true;
});

When(/^I Verify Minus Button is disabled$/, async function () {
    const minusButton = await homepage.isChildrenMinusButtonEnable();
    expect(minusButton, 'Children Minus Button Is Enable').to.be.false;
});

When(/^I Select “Adults as 6$/, async function () {
    await homepage.addAdult(4);
});

When(/^I Select “Children” as 3$/, async function () {
    await homepage.addChildren(3);
});

When(/^I Select first child age: 4$/, async function () {
    await homepage.inputeChild1Age();
});

When(/^I Select second child age: Under 1$/, async function () {
    await homepage.inputeChild2Age();
});

When(/^I Select third child age: 7$/, async function () {
    await homepage.inputeChild3Age();
});

When(/^I Click Done$/, async function () {
    await homepage.clickTravelersDoneButton();
});

When(/^I Verify total number of Travelers is sum of adults and children as same as selected on step #3 and #4$/, async function () {
    const totalPersons = await homepage.totalRoomPersonsCount();
    const totalTavelers = await homepage.totalTravelersCount();
    expect(totalPersons, 'Travelers Count NOT Equal').to.equal(totalTavelers);
    
});