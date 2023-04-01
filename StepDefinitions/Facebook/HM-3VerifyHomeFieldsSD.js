const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Facebook/Homepage');


const homepage = new Homepage();


Then(/^I verify login email field is enabled$/, async function () {
    const isEmailFieldEnabled = await homepage.isEmailFieldEnabled();
    expect(isEmailFieldEnabled, 'Login error is NOT displayed').to.be.true;
});

Then(/^I verify login password field is enabled$/, async function () {
    const isPasswordFieldEnabled = await homepage.isPasswordFieldEnabled();
    expect(isPasswordFieldEnabled, 'Login error is NOT displayed').to.be.true;
})
Then(/^I verify login button field is enabled$/, async function () {
    const isLoginButtonFieldEnabled = await homepage.isLoginButtonFieldEnabled();
    expect(isLoginButtonFieldEnabled, 'Login error is NOT displayed').to.be.true;
})

