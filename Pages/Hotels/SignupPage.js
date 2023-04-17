class SignupPage {

    // Signin Signup Locators

    signinButtonLocator = '//a[@data-stid="link-header-account-signin"]';
    signupButtonLocator = '//a[text() = "Sign up, it’s free"]';
    signinMenuLocator = '//div[contains(@class, "uitk-menu-container uitk")]';
    signinLinkLocator = '//button[text() = "Sign in"]';
    

    // locators of webElements on SignupPage

    formTitleLocator = '//h1[text()="Create an account"]'
    emailFieldLocator = '#signupFormEmailInput';
    emailErrorLocator = '//div [text()="Enter a valid email."]';
    fNameFieldLocator = '#signupFormFirstNameInput';
    fNameErrorLocator = '#signupFormFirstNameInput-error';
    lNameFieldLocator = '#signupFormLastNameInput';
    lNameErrorLocator = '#signupFormLastNameInput-error';
    passFieldLocator = '#signupFormPasswordInput';
    keepMeSigninCheckboxLocator = '//div[contains@class, " uitk-layout-flex-flex-wrap-nowrap uitk-"]';
    continueButtonLocator = '//button[text()="Continue"]';
    tcLocator = '//a[text() = "Terms and Conditions"]';
    lastRevisedDateLocator = '//span[text()="Last revised: 01/01/23"]';
    privacyLinkLocator = '//a[text()="Privacy Statement"]';

    // locators of webElements on SigninPage

    signinEmailFieldLocator = '//input[@name="loginFormEmailInput"]';
    signinPageContinueButtonLocator = '//button[@id="loginFormSubmitButton"]';
    loginFormEmailInputErrorLocator = '//div[@id="loginFormEmailInput-error"]';


    // functions to intercat with webElements on Homepage(SignIn)

    async switchWindow() {

        const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('signup?')) {
            break;
        }
    }

    }

    async clickSignInLink() {
        await $(this.signinLinkLocator).click();
    }

    async clickSignInButton() {
        await $(this.signinButtonLocator).click();
    }

    async clickSignUpButton() {
        await $(this.signupButtonLocator).click();
    }

    async waitForSignInMenu() {
        await $(this.signinMenuLocator).waitForDisplayed();
    }


    // functions to intercat with webElements on SignupPage

    async waitForSignUpForm() {

        await $(this.formTitleLocator).waitForDisplayed();
    }

    async enterInvalidEmailInSignIn(data) {

        await $(this.signinEmailFieldLocator).setValue(data);
    }

    async enterEmail(email) {

        await $(this.emailFieldLocator).setValue(email);
    }
    async enterFirstName(fName) {

        await $(this.fNameFieldLocator).setValue(fName);
    }
    async enterLastName(lName) {

        await $(this.lNameFieldLocator).setValue(lName);
    }
    async enterPassword(pass) {

        await $(this.passFieldLocator).setValue(pass);
    }

    async isEmailErrorDisplayed() {

        await $(this.emailErrorLocator).waitForDisplayed();
        return await $(this.emailErrorLocator).isDisplayed();

    }

    async isFirstNameErrorDisplayed() {

        await $(this.fNameErrorLocator).waitForDisplayed();
        return await $(this.fNameErrorLocator).isDisplayed();

    }

    async isLastNameErrorDisplayed() {

        await $(this.lNameErrorLocator).waitForDisplayed();
        return await $(this.lNameErrorLocator).isDisplayed();

    }

    async isKeepMeSigninCheckboxDisplayed() {

        await $(this.keepMeSigninCheckboxLocator).waitForDisplayed();
        return await $(this.keepMeSigninCheckboxLocator).isDisplayed();
    }

    async isKeepMeSigninCheckboxEnable() {

        return await $(this.keepMeSigninCheckboxLocator).isEnabled();
    }

    async isContinueButtonDisplayed() {

        return await $(this.continueButtonLocator).isDisplayed();
    }

    async isContinueButtonEnable() {

        return await $(this.continueButtonLocator).isEnabled();
    }

    async clickTCLink() {

        await $(this.tcLocator).waitForDisplayed();
        await $(this.tcLocator).click();
    }

    async isTcOpenInNewWindow() {

        return await browser.getWindowHandles();
    }

    async isInvalidEmailErrorDisplayed() {

        await $(this.loginFormEmailInputErrorLocator).waitForDisplayed();
        return await $(this.loginFormEmailInputErrorLocator).isDisplayed();
    }

    async clickprivacyLink() {

        await $(this.privacyLinkLocator).click();
    }

    async clickContinueButtonInSignIn() {

        await $(this.signinPageContinueButtonLocator).click();
    }

     

}

module.exports = SignupPage;