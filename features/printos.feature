Feature: PrintOS

    @printosPrintOrgNames
    Scenario Outline: Verify user is able to list all org names
        Given Navigate to "<Url>"
        Then Click on Sign In button
        Then Enter email address "<LoginMailID>"
        Then Click on Next button
        Then Click on use password
        Then Enter password "<Password>"        
        Then Click on Second Sign In button
        Then Click on accept button
        Then Print all org names

        Examples:
            | Url | LoginMailID | Password |
            | https://stg.printopt.org/start/#/signin  | carlossandevistan@yopmail.com | swqa!Quality123  |


    @printosPrintOrgStatus
    Scenario Outline: Verify user is able to print org status
        Given Navigate to "<Url>"
        Then Click on Sign In button
        Then Enter email address "<LoginMailID>"
        Then Click on Next button
        Then Click on use password
        Then Enter password "<Password>"        
        Then Click on Second Sign In button
        Then Click on accept button
        Then Fetch status of all orgs

        Examples:
            | Url | LoginMailID | Password |
            | https://stg.printopt.org/start/#/signin  | carlossandevistan@yopmail.com | swqa!Quality123  |


    @printosPrintOrgApiDetails
    Scenario Outline: Verify user is able to print org api details
        Given Navigate to "<Url>"
        Then Click on Sign In button
        Then Enter email address "<LoginMailID>"
        Then Click on Next button
        Then Click on use password
        Then Enter password "<Password>"        
        Then Click on Second Sign In button
        Then Click on accept button        
        Then Fetch api details of Subscribed orgs

        # Then Close browser

        Examples:
            | Url | LoginMailID | Password |
            | https://stg.printopt.org/start/#/signin  | carlossandevistan@yopmail.com | swqa!Quality123  |