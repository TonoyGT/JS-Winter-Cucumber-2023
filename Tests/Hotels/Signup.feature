@signUpHotels
Feature: Sign Up

  @TC-22
  Scenario Outline: Verify error message for invalid data in SignUp form
    When I Lunch hotels.com homepage
    Then I click on Sign In Button
    Then I click on Sign Up Button
    Then I enter "<email>" as Email
    Then I enter "<fName>" as First Name
    Then I enter "<lName>" as Last Name
    Then I enter "<pass>" as Password
    Then I verify Email Error Is Displayed
    Then I verify First Name Error Is Displayed
    Then I verify Last Name Error Is Displayed
    Then I verify Keep Me Sign In Checkbox is Displayed
    And I verify Keep Me Sign In Checkbox is Enabled
    Then I verify Continue Button is Displayed
    And I verify Continue Button is NOT Enabled

    Examples: 
      | email  | fName | lName | pass        |
      | #!@### | !@    | %^&   | aBc@123@123 |

  @TC-20
  Scenario Outline: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
    When I Lunch hotels.com homepage
    Then I click on Sign In Button
    Then I click on Sign Up Button
    Then I Click on TC Link
    And I Verify "Terms & Conditions" Is Open in A New Tab
    Then I Verify Revised date Is In Correct Format
    Then I Click on Privacy Link
    And I Verify "Privacy" Is Open in A New Tab
    Then I Verify Updated date Is In Correct Format
    