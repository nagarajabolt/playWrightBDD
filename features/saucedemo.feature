Feature: Sauce Demo product sorting and logout

    Scenario: Validate product filter options and logout
        Given Navigate to "https://www.saucedemo.com/"
        Then Enter username "standard_user"
        Then Enter password "secret_sauce"
        Then Click on Login Button
        When Open the product filter
        Then Validate the product filter options are available
            | Name (A to Z)   |
            | Name (Z to A)   |
            | Price (low to high) |
            | Price (high to low) |
        When Open the navigation menu
        And Click on Logout
        Then Validate header text is: "Swag Labs"
