Feature: Sample API response

    @api
    Scenario: Print whoami API response
        Given Open sample API page "https://beeceptor.com/docs/sample-api-for-testing/"
        Then Print whoami API response
        Then Close browser
