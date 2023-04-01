Facebook:

Scenario: Verify login fields are enabled
    Given I am on facebook homepage
    Then I verify login email field is enabled
        And I verify login password field is enabled
        And I verify login button field is enabled


Scenario: Verify current date is selected in sign up form
    Given I am on facebook homepage
        And I click on Create New Account button
    Then I verify current month is selected in month dropdown
        And I verify current date is selected in date dropdown
        And I verify current year is selected in year dropdown

--> Complete the automation in Cucumber framework and create pull request.
--> Due date: Sat (Mar-25)