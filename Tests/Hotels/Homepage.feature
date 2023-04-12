@signUpHotels
Feature: Homepage

  @TC-28
  Scenario: Verify Child-age dropdowns are same as number of Children selected
    When I Lunch hotels.com homepage
    And I click on Travelers
    And I Select “Children” as 2
    Then I Verify Children-age dropdown are 2
    And I Verify Plus Button is enabled
    And I Verify Minus Button is enabled
    When I Select “Children” as 6
    Then I Verify Children-age dropdown are 6
    And I Verify Plus Button is disabled
    And I Verify Minus Button is enabled
    When I Select “Children” as 5
    Then I Verify Children-age dropdown are 5
    And I Verify Plus Button is enabled
    And I Verify Minus Button is enabled
    When I Select “Children” as 0
    Then I Verify Children-age dropdown is NOT displayed
    And I Verify Plus Button is enabled
    And I Verify Minus Button is disabled

  @TC-18
  Scenario: Verify user can update number of guests on Home page
    When I Lunch hotels.com homepage
    Then I click on Travelers
    Then I Select “Adults as 6
    And I Select “Children” as 3
    And I Select first child age: 4
    And I Select second child age: Under 1
    And I Select third child age: 7
    Then I Click Done
    Then I Verify total number of Travelers is sum of adults and children as same as selected on step #3 and #4

  @TC-24
  Scenario: Verify error is displayed when user submits the empty feedback form
    When I Lunch hotels.com homepage
    Then I click on Sign In Button
    Then I Click “Feedback”
    Then I Click on Submit button
    Then I Verify error message is displayed (Please fill in the required information highlighted below.)
    Then I Verify red-dotted line is displayed around star-section.

  @TC-25
  Scenario: Verify user can submit feedback after completing the feedback form
    When I Lunch hotels.com homepage
    Then I click on Sign In Button
    Then I Click “Feedback”
    Then I Select any star-rating
    Then I Enter any comments
    Then I Select any option for How likely are you to return to Hotels.com?
    Then I Select any answer for “Prior to this visit, have you ever booked on Hotels.com?”
    Then I Select any answer for ”Did you accomplish what you wanted to do on this page?”
    Then I Click on Submit button
    Then I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed
