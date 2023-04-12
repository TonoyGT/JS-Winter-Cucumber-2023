Feature: Login

  @1
  Scenario: Verify login fields are enabled
    Given I am on facebook homepage
    Then I verify login email field is enabled
    Then I verify login password field is enabled
    Then I verify login button field is enabled

  Scenario: Verify current date is selected in sign up form
    And I click on Create New Account button
    Then I verify current month is selected in month dropdown
    And I verify current date is selected in date dropdown
    And I verify current year is selected in year dropdown