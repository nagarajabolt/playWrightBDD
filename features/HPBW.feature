Feature: Open Google

    @hpbwlogin
    Scenario Outline: Verify user is able to login to HPBW site
        Given Navigate to "<Url>"
        Then Click on Sign In button
        Then Enter email address "<LoginMailID>"
        Then Click on use password
        Then Enter password "<Password>"        
        Then Click on Next button
        Then Click on Second Sign In button
        Then Close browser

        Examples:
            | Url | LoginMailID | Password |
            | https://stg.printopt.org/start/#/signin  | carlossandevistan@yopmail.com | swqa!Quality123  |

    @BuyTokens
    Scenario: Buy tokens
        Given Open chrome browser and navigate to "https://aec-itg.hpcloud.hp.com/projects"
        Then Click on Login button
        Then Enter email address "nagaraj11@mailsac.com"
        Then Click on Next button
        Then Click on use password
        Then Enter password "Test123@"
        Then Click on Signin button
        Then Click on Tokens button
        Then Click on Get more tokens
        Then Click on 5 token package
        Then Close browser

