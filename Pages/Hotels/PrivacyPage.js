class PrivacyPage {

    // locators of webElements on Privacy Page

    lastUpdatedDateLocator = '//p[contains(text(), "Last Updated:")]';


    // functions to intercat with webElements on Privacy Page

    async currentDateRead() {
       return await $(this.lastUpdatedDateLocator).getText();
        
        
    }
}
module.exports = PrivacyPage;













