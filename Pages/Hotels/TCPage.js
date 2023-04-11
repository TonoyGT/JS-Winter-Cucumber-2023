class TCPage {

    // locators of webElements on T&CPage

    lastRevisedDateLocator = '//span[contains(text(), "Last revised:")]';

    // functions to intercat with webElements on T&C Page

    async currentDateRead() {
       return await $(this.lastRevisedDateLocator).getText();
        
    }
}

module.exports = TCPage;