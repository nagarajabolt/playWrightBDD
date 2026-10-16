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

    
    @printosPlaceOrder
    Scenario Outline: Verify user is able to place order
        Given Navigate to "<Url>"
        Then Click on Sign In button
        Then Enter email address "<LoginMailID>"
        Then Click on Next button
        Then Click on use password
        Then Enter password "<Password>"        
        Then Click on Second Sign In button
        Then Click on accept button  
        Then Select org "<OrgName>"       
        Then Click on MarketPlace
        Then Check if status is Available for purchase
        Then Click on HP Professional Print Service Plans
        Then Click on Subscribe button     
        Then Click on Proceed to Checkout        
        Then Enter billing details
            | FirstName | LastName | AddressLine1 | City | State | ZipCode | PhoneNumber | CompanyName |
            # | John     | Doe        | 123 Main St | New York | Wyoming | 10001 | 123-456-7890 | Acme Inc. |
            | Tom     | Cruise        | 151 KAPAHULU AVE | Honolulu | Hawaii | 96815 | 857-245-7473 | Apple Inc. |
        Then Click on use this address
        Then Enter card details
            | CardNumber  | ExpiryDate | CVV |
            | 4111111111111111  | 12/34     | 123 |
        Then Click on use this card
        Then Select checkboxes in summary page
        Then Click on enroll In ProducationHubHWSuiteButton

        Examples:
            | Url | LoginMailID | Password | OrgName |
            | https://stg.printopt.org/start/#/signin  | qa.printos.abc@mailsac.com | test123$  |   hpbwqa abc 15  |
            | https://stg.printopt.org/start/#/signin  | qa.printos.abc@mailsac.com | test123$  |   hpbwqa abc 16  |

       