Feature: Login

    Scenario: Verify user gets error for invalid login credentials
        Given I am on facebook homepage
        When I enter !@#$ as login username
        And I enter abcd@1234 as login password
        And I click login button
        Then I verify login error is displayed