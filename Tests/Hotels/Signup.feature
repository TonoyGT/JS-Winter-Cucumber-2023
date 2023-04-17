@signUpHotels
Feature: Sign Up

  @TC-22
  Scenario Outline: Verify error message for invalid data in SignUp form
    When I Lunch hotels.com homepage
    And I click on Sign In Link
    And I click on Sign Up Button
    When I enter "<email>" as Email
    And I enter "<fName>" as First Name
    And I enter "<lName>" as Last Name
    And I enter "<pass>" as Password
    Then I verify Email Error Is Displayed
    And I verify First Name Error Is Displayed
    And I verify Last Name Error Is Displayed
    And I verify Keep Me Sign In Checkbox is Displayed
    And I verify Keep Me Sign In Checkbox is Enabled
    And I verify Continue Button is Displayed
    And I verify Continue Button is NOT Enabled

    Examples: 
      | email  | fName | lName | pass        |
      | #!@### | !@    | %^&   | aBc@123@123 |

  @TC-20
  Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
    When I Lunch hotels.com homepage
    And I click on Sign In Link
    And I click on Sign Up Button
    When I Click on TC Link
    Then I Verify "Terms & Conditions" Is Open in A New Tab
    And I Verify Revised date Is In Correct Format
    When I Click on Privacy Link
    Then I Verify "Privacy" Is Open in A New Tab
    And I Verify Updated date Is In Correct Format
    