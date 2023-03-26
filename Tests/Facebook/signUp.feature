Feature: Sign Up

    Scenario: Verify user gets error when does not mention gender
        Given I am on facebook homepage
            And I click on Create New Account button
        When I enter "JOhn" as Firstname
            And I enter "Kial" as Lastname
            And I enter "8767564532" as phone number
            And I enter "abcd@9012#" as New password
            And I enter "Jul 20 2018" as birthdate
            And I click "Sign Up" button
        Then I verify gender error is displayed
    

    Scenario: Verify user gets error when does not mention birthdate
        Given I am on facebook homepage
            And I click on Create New Account button
        When I enter "Henry" as Firstname
            And I enter "Reel" as Lastname
            And I enter 9798979897 as phone number
            And I enter "passwo0d@123" as New password
            And I select "Female" as gender
            And I click "Sign Up" button
        Then I verify birthdate error is displayed