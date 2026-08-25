Feature: Open Google

    @Openweb
    Scenario Outline: Verify user is able to open Google
        Given Navigate to "<Url>"
        Then Close browser

        Examples:
            | Url | Header 2 | Header 3 |
            | https://www.google.com  | Value 2  | Value 3  |
            | https://www.gmail.com  | Value 2  | Value 3  |


    @Login
    Scenario Outline: Verify user is able to login to saucedemo
        Given Navigate to "<Url>"
        Then Enter username "<Username>"
        Then Enter password "<Password>"
        Then Validate header text is: "<HeaderText>"
        Then Click on Login Button

        Examples:
            | Url | Username | Password | HeaderText |
            | https://www.saucedemo.com/  | standard_user  | secret_sauce |Swag Labs|