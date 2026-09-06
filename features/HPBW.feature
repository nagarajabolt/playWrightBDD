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
        Given Open chrome browser and Login to application
            | Url      | Username  |Password | 
            |  https://aec-itg.hpcloud.hp.com/projects  | nagaraj11@mailsac.com |Test123@  |
        Then Click on Tokens button and print detail api details and validate api response
        Then Click on Get more tokens
        Then Click on 5 token package
        Then Click on Add to Cart
        Then Click on Proceed to Checkout
        Then Enter billing details
            | FirstName | LastName | AddressLine1 | City | State | ZipCode | PhoneNumber | CompanyName |
            | John     | Doe        | 123 Main St | New York | Wyoming | 10001 | 123-456-7890 | Acme Inc. |
        Then Click on use this address
        Then Enter card details
            | CardNumber  | ExpiryDate | CVV |
            | 4111111111111111  | 12/34     | 123 |
        Then Click on use this card
        Then Click on confirm and purchase
        Then Click on see orders and invoices
        Then Close browser