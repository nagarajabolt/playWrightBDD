Feature: PrintOS sign in and organization selection

    Scenario: User signs in and selects the Hawaii 38 organization
        Given Navigate to "https://stg.printopt.org/start/#/signin"
        Then Click on Sign In button
        Then Enter email address "carlossandevistan@yopmail.com"
        Then Click on Next button
        Then Click on use password
        Then Enter password "swqa!Quality123"
        Then Click on Second Sign In button
        Then Click on App Launcher menu
        Then Click on Organization
        Then Search for organization "Hawaii 38"
        Then Select organization "Hawaii 38"
        Then Close browser
