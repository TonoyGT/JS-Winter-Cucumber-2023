const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Facebook/Homepage');
const Loginpage = require('../../Pages/Facebook/Loginpage');

const homepage = new Homepage();
const loginpage = new Loginpage();


When(/^I enter (.+) as login username$/, async function (loginEmail) {
    await homepage.enterLoginEmail(loginEmail);
})

When(/^I enter (.+) as login password$/, async function (loginPassword) {
    await homepage.enterLoginPassword(loginPassword);
});

When(/^I click login button$/, async function () {
    await homepage.clickLoginButton();
})

Then(/^I verify login error is displayed$/, async function () {
    const isErrDisplayed = await loginpage.isLoginErrorDisplayed();
    expect(isErrDisplayed, 'Login error is NOT displayed').to.be.true;
});

