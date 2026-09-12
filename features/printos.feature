Feature: PrintOS

    @printoslogin
    Scenario Outline: Verify user is able to login to HPBW site
        Given Navigate to "<Url>"
        Then Click on Sign In button
        Then Enter email address "<LoginMailID>"
        Then Click on Next button
        Then Click on use password
        Then Enter password "<Password>"        
        Then Click on Second Sign In button
        Then Click on My applications button
        Then Click on Organization Menu
        
        # Then Close browser

        Examples:
            | Url | LoginMailID | Password |
            | https://stg.printopt.org/start/#/signin  | carlossandevistan@yopmail.com | swqa!Quality123  |