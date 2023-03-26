class SignupPage {

    // locators of webElements on SignupPage
    signUpSubHeadingLocator = "div=It’s quick and easy.";
    selectedMonthLocator = '//select[@id="month"]//option[@selected]';
    selectedDayLocator = '//select[@title="Day"]/option[@selected]';
    selectedYearLocator = '//select[@title="Year"]/option[@selected]';
    firstnameInputLocator = 'input[name=firstname]'
    lastnameInputLocator = 'input[name=lastname]'
    mobileOrEmailInputLocator = 'input[name=reg_email__]'
    newPasswordInputLocator = '#password_step_input'
    monthDropdownLocator = '#month';
    dayDropdownLocator = '#day';
    yearDropdownLocator = '#year';
    signupBtnLocator = '//button[@name="websubmit"]';
    genderErrorLocator = '//div[text()="Please choose a gender. You can change who can see this later."]'


    // functions to intercat with webElements on SignupPage
    async waitForSignUpForm() {
        await $(this.signUpSubHeadingLocator).waitForDisplayed();
    }

    async getSelectedMonth() {
        await $(this.selectedMonthLocator).waitForDisplayed();
        return await $(this.selectedMonthLocator).getText();
    }

    async enterFirstName(fname) {
        await $(this.firstnameInputLocator).setValue(fname);
    }

    async enterLastName(lname) {
        await $(this.lastnameInputLocator).setValue(lname);
    }

    async enterMobileOrEmail(mobileOrEmail) {
        await $(this.mobileOrEmailInputLocator).setValue(mobileOrEmail);
    }

    async enterNewPassword(newPwd) {
        await $(this.newPasswordInputLocator).setValue(newPwd);
    }

    async selectMonth(month) {
        await $(this.monthDropdownLocator).selectByVisibleText(month);
    }

    async selectDay(day) {
        await $(this.dayDropdownLocator).selectByVisibleText(day);
    }

    async selectYear(year) {
        await $(this.yearDropdownLocator).selectByVisibleText(year);
    }

    async selectBirthDate(birthdate) {      // birthdate = Jul 20 2018 -> 'Jul', '20', '2018'
        const birthDateParts = birthdate.split(' ');        // ['Jul', '20', '2018']

        // select month
        await $(this.monthDropdownLocator).selectByVisibleText(birthDateParts[0]);

        // select day
        await $(this.dayDropdownLocator).selectByVisibleText(birthDateParts[1]);

        // select year
        await $(this.yearDropdownLocator).selectByVisibleText(birthDateParts[2]);
    }

    async clickSignUpBtn() {
        await $(this.signupBtnLocator).click();
    }

    async isGenderErrorDisplayed() {
        await $(this.genderErrorLocator).waitForDisplayed();
        return await $(this.genderErrorLocator).isDisplayed();
    }

    //  functions to verify current month, date, year on SignupPage

    async CurrentMonthValue() {
        await $(this.selectedMonthLocator).waitForDisplayed();
        return await $(this.selectedMonthLocator).getText();
    }

    async CurrentDateValue() {
        await $(this.selectedDayLocator).waitForDisplayed();
        return await $(this.selectedDayLocator).getText();
    }

    async CurrentYearValue() {
        await $(this.selectedYearLocator).waitForDisplayed();
        return await $(this.selectedYearLocator).getText();
    }


}
module.exports = SignupPage;