Feature: Testing Signup Journeys

    Scenario Outline: Verify that a user can sign up using <source> as a source of info
        Given I am on the mima homepage
        When I click the "Sign up" button
        Then I should see the sign up form page
        When I fill in the "full name"
        And I fill in the "business name"
        And I fill in the business email
        And I fill in the "business phone number"
        And I click the "Next" button
        And I fill in the "twitter handle"
        And I select how I heard about mima through "<source>"
        And I fill in the "password"
        And I click the "Sign Up" button
        # And I insert the OTP
        # Then I should see the dashboard  sidebar content
        #     | panel                |
        #     | Customer             |
        #     | Invoice & Accounting |
        #     | Orders               |
        #     | Payment Link         |
        #     | Booking              |
        #     | Paybills             |
        #     | Stock                |
        #     | Split Payments       |
        #     | Employees            |


        Examples:
            | source           |
            | Webinar/Seminar  |
            | Instagram        |
            # | Facebook         |
            # | Twitter          |
            # | Google Search    |
            # | Friends & Family |
            # | Mima Sales Agent |
            # | Others           |


