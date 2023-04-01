Facebook:

    Scenario: Verify default state of signup form
        Then I verify firstname field is empty
        And I verify lastname field is empty
        And I verify phone number field is empty
        And I verify current date is selected
        And I verify no gender is selected


Hotels:
    Testcase: Verify rewards form is empty and Conitnue button is disabled
        Steps:
        1. Launch hotels.com
        2. Click on Learn about Hotels.com Rewards
        3. -> Verify Hotels Rewards opened in a new window
        4. Click on Join Now
        5. -> Verify Form is blank
        6. -> Verify Continue button is NOT enabled

    Testcase: Verify User is able to select dates from Calendar
        Steps:
        1. Launch hotels.com
        2. Click Calendar button
        3. Go to August 2023
        4. Select 8 as Checkin date
        5. Select 11 as Checkout date
        6. Click Done button
        7. Verify "Aug 8 - Aug 11" is displayed in the Dates button

    

--> Due date: Mar 29 (Wed)