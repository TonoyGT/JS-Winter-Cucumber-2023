class FeedbackPage {

// Web Elements Locators

feedbackHeadingLocator = '//h5[contains(text(), "specific Itineraries or")]';
submitButtonLocator = '//button[text()="Submit"]';
errorMessageLocator = '//p[contains(text(), "information highlighted")]';
reddotedLinelocator = '//fieldset[contains(@style, "padding")]';
starRating3locator = '//span[@data-localization="ratings-3"]';
textBoxLocator = '//textarea[@id="verbatim"]';
willYouReturnLocator = '//select[@name="will-you-return"]';
priorAnsNOLocator = '//label[@for="booked-here-before-no"]';
didYouAnsYesLocator = '//span[@data-localization="were-you-successful-yes"]';
thankyouFeedbackLocator= '//h5[text()="THANK YOU FOR YOUR FEEDBACK."]';


// Functions

async switchWindow() {

    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('directword')) {
            break;
        }
    }
}

async waitForFeedbackDisplay() {
    await $(this.feedbackHeadingLocator).waitForDisplayed();
}

async clickSubmitButton() {
    await $(this.submitButtonLocator).click();
}

async isErrorMessageDisplayed() {
    return await $(this.errorMessageLocator).isDispalyed();
}

async isRedDotedLineDisplayed() {
   return await $(this.reddotedLinelocator).isDispalyed();
}

async selectStarRating() {
    await $(this.starRating3locator).click();
 }

 async enterComments() {
    await $(this.textBoxLocator).setValue('Hi');
 }
 async willYouReturnSelect() {
    await $(this.willYouReturnLocator).selectByIndex(2);   
}

async clickOnPriorAnswer() {
    await $(this.priorAnsNOLocator).click();
 }

 async clickOnDidYouAnswer() {
    await $(this.didYouAnsYesLocator).click();
 }

 async isThankyouFeedbackDisplayed() {
    return await $(this.thankyouFeedbackLocator).isDispalyed();
 }





}

module.exports = FeedbackPage;