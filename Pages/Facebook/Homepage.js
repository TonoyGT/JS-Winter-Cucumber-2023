class Homepage {

    // locators of webElements on Homepage
    createNewAccountBtnLocator = 'a[data-testid=open-registration-form-button]';
    allLinksLocator = '<a>';
    loginEmailLocator = '#email';
    loginPasswordLocator = '#pass';
    loginButtonLocator = '<button>';
    


    // functions to interact with webElements on Homepage
    async clickCreateNewAccountBtn() {
        await $(this.createNewAccountBtnLocator).click();
    }

    async getLinksCount() {
        const allLinks = await $$(allLinksLocator);
        return allLinks.length;
    }

    async enterLoginEmail(loginEmail) {
        await $(this.loginEmailLocator).setValue(loginEmail);
    }

    async enterLoginPassword(loginPwd) {
        await $(this.loginPasswordLocator).setValue(loginPwd);
    }

    async clickLoginButton() {
        await $(this.loginButtonLocator).click();
    }

    // Functions to Verify elements on Homepage
    async isEmailFieldEnabled() {
        await $(this.loginEmailLocator).waitForEnabled();
        return await $(this.loginEmailLocator).isEnabled();
    }

    async isPasswordFieldEnabled() {
        await $(this.loginPasswordLocator).waitForEnabled();
        return await $(this.loginPasswordLocator).isEnabled();
    }

    async isLoginButtonFieldEnabled() {
        await $(this.loginButtonLocator).waitForEnabled();
        return await $(this.loginButtonLocator).isEnabled();
    }

    




}
module.exports = Homepage;
