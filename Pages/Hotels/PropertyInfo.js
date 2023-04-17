class PropertyInfo {

    // Webelements Locators

    likeToListLocator = '//p[text()="What would you like to list?"]';
    lodgingOptionLocator = '//p[text()="Lodging"]';
    privateResidenceOptionLocator = '//div[@id="classification_privateResidence"]';
    step1Of3Locator = '//div[@data-wdio="lyp-progress-bar"]';
    step2Of3Locator = '//div[contains(text(), "Step 2")]';
    howMuchEarnLocator = '//h1[contains(text()," could earn!")]';
    increaseBedroomLocator = '//button[@aria-label = "Increase bedrooms"]';
    increaseBathroomLocator = '//button[@aria-label = "Increase bathrooms"]';
    propertyInfoNextButtonLocator = '//button[@id="propertyInfoNextBtn"]';
    whereIsYourPropertyLocator = '//div[contains(text(), "Step 2")]/following-sibling::h1';
    locationTypeLocator = '//input[@id="locationTypeAhead"]';
    searchDropDownLocator = '//ul[@role="menu"]/child::li[1]';
    graphLocator = '//section[@class="map-section location"]';
    pinInGraphLocator = '//img[contains(@src, "maps.gstatic.com/")]';
    moveThePinTextLocator = '//span[contains(text(), "adjust the location")]';


    // Property Related Functions


    async switchWindow() {

        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            if (currentUrl.includes('expediapartnercentral')) {
                break;
            }
        }

    }

    async clickPrivateResidence() {
        await $(this.privateResidenceOptionLocator).click();
    }

    async clickPropertyInfoNextButton() {
        await $(this.propertyInfoNextButtonLocator).click();
    }

    async isLikeToListDisplayed() {

        const languageValue = await $(this.likeToListLocator).getText();
        const result = (languageValue.localeCompare('What would you like to list?') === 0);
        return result;
    }

    async isLodgingDisplayed() {

        const languageValue = await $(this.lodgingOptionLocator).getText();
        const result = (languageValue.localeCompare('Lodging') === 0);
        return result;

    }

    async isPrivateResidenceDisplayed() {

        return await $(this.privateResidenceOptionLocator).isDisplayed();
    }

    async isStep1Of3Displayed() {

        const languageValue = await $(this.step1Of3Locator).getText();
        const result = (languageValue.localeCompare('Step 1 of 3') === 0);
        return result;
    }

    async isStep2Of3Displayed() {

        const languageValue = await $(this.step2Of3Locator).getText();
        const result = (languageValue.localeCompare('Step 2 of 3') === 0);
        return result;
    }

    async isHowmuchEarnDisplayed() {

        const languageValue = await $(this.howMuchEarnLocator).getText();
        const result = (languageValue.localeCompare('See how much you could earn!') === 0);
        return result;
    }

    async isWhereIsYourPropertyLocatedDisplayed() {

        return await $(this.whereIsYourPropertyLocator).isDisplayed();

    }

    async isMoveThePinTextDisplayed() {

        const languageValue = await $(this.moveThePinTextLocator).getText();
        const result = (languageValue.localeCompare('Move the pin to adjust the location of your property.') === 0);
        return result;
    }

    async isGraphDisplayed() {

        await $(this.graphLocator).waitForDisplayed();
        return await $(this.graphLocator).isDisplayed();
    }

    async isGraphPinDisplayed() {

        return await $(this.pinInGraphLocator).isDisplayed();
    }

    async addBedroom(data) {

        for (let i = 0; i < data; i++) {
            await $(this.increaseBedroomLocator).click();
        }
    }

    async addBathroom(data) {

        for (let i = 0; i < data; i++) {
            await $(this.increaseBathroomLocator).click();
        }
    }

    async inputeAddress(data) {

        await $(this.locationTypeLocator).setValue(data);
    }

    async selectAddress() {

        await $(this.searchDropDownLocator).click();
    }

}

module.exports = PropertyInfo;