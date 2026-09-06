Feature: Capture detail API traffic

    @apimocking
    Scenario: Login and capture the detail API response
        Given I navigate to the projects page
        When I click the Login button on the projects page
        And I enter the API mocking email address "nagaraj11@mailsac.com"
        And I click the API mocking Next button
        And I choose use password for API mocking
        And I enter the API mocking password "Test123@"
        And I click the API mocking Signin button
        And I click the dynamically numbered Tokens button
        Then I print the detail API request and response
