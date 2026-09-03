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
        Then Click on 6 Tokens button
        Then Click on Get more tokens
        Then Click on 5 token package
        Then Click on Add to Cart
        Then Click on Proceed to Checkout
        Then Enter First name "John"
        Then Enter Last name "Doe"
        Then Enter Address line1 "123 Main St"
        Then Enter city "New York"
        Then Select state "Wyoming"
        Then Enter zip code "10001"
        Then Enter phone number "123-456-7890"
        Then Enter company name "Acme Inc."
        Then Click on use this address
        Then Enter card number "4111111111111111"
        Then Enter expiry date "12/34"
        Then Enter cvv "123"
        Then Click on use this card
        Then Click on confirm and purchase
        Then Click on see orders and invoices

        # Then Enter name on card "John Doe"
        # Then Enter card number "4242424242424242"
        # Then Enter expiry date "12/34"
        # Then Enter CVC "123"
        # Then Enter postal code "12345"
        # Then Click on Pay button
        # Then Validate payment success message is: "Payment successful!"




        Then Close browser

