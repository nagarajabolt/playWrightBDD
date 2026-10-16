Feature: HPBW features

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
            |  https://aec-itg.hpcloud.hp.com/projects  | hpbw.qauser.i@yopmail.com |test123$  |
        Then Click on Tokens button and print detail api details and validate api response
        Then Click on Get more tokens
        Then Click on 5 token package
        Then Click on Add to Cart
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
        Then Click on confirm and purchase
        Then Click on Back to HPBW Tokens Pack

        Then Click on Tokens button and print detail api details and validate api response
        Then Click on Get more tokens
        Then Click on 1 token package
        Then Click on Add to Cart
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
        Then Click on confirm and purchase
        Then Click on Back to HPBW Tokens Pack
        Then Click on Tokens button and print detail api details and validate api response
        Then Click on Get more tokens
        Then Click on 10 token package
        Then Click on Add to Cart
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
        Then Click on confirm and purchase
        Then Click on Back to HPBW Tokens Pack
        # Then Close browser\
        Examples:
            | Url      | Username  |Password | 
            |  https://aec-itg.hpcloud.hp.com/projects  | hpbw.qauser.i@yopmail.com |test123$  |
            |  https://aec-itg.hpcloud.hp.com/projects  | hpbw.qauser.i@yopmail.com |test123$  |
            |  https://aec-itg.hpcloud.hp.com/projects  | hpbw.qauser.i@yopmail.com |test123$  |
            |  https://aec-itg.hpcloud.hp.com/projects  | hpbw.qauser.i@yopmail.com |test123$  |
            |  https://aec-itg.hpcloud.hp.com/projects  | hpbw.qauser.i@yopmail.com |test123$  |                                                


    @UploadPlan
    Scenario Outline: Upload plan
        Given Login to application "<Url>", "<Username>", "<Password>"
        Then Click on AI Vectorizations
        Then Click on AI Vectorize
        Then Upload file "<FilePath>"
        Then Click on Continue
        Then Click on Build Workspace

        Examples:
            | Url      | Username  | Password | FilePath                                                                    |
            | https://aec-itg.hpcloud.hp.com/projects | hpbw.qauser.i@yopmail.com | test123$ | C:/Users/KeNa686/OneDrive - HP Inc/Desktop/1-bhk-house-plan-with-shop.jpg |


    @ConsumerPortal
    Scenario: Consumer portal login
        Given Open chrome browser and Login to consumer portal application
            | Url      | Username  |Password | 
            # |  https://login3.stg.cd.id.hp.com/login3?flow=https://directory.stg.cd.id.hp.com/directory/v1/authentication/login/AWc7nCRAeesaa3d7C6NSzroEywK1AAAAAAAAAACp-dFpnhZivgc_rEdAQ2m8HbcaGfhrOHcv2Z2L6LynLprqtoNEQDrqN1R9Nf8NmUrFze_g9kMyRkrAfucjzHt1ByJ3o5RxnGn9E_FJuhmMjpcEsQKI_y_fzlh94FPF8rYkU9W_54vH2E52rK36oXIBOmbiT-XI_d15Rvnw3uEIaEi6ZzB5vkqOHKRg6ZErbICLGR4AArO9YRXRlw6Q7Ce5BC363RGNb4z_t2S6cdFDjpkJe2c96umqvl_WITWnyycoilRil97WqDS40sir10gyx8tRCIn5wyT_W7MAq0UjZR044g6NFsQECE2RO-81gW6is1_UF82Ufa4fNV0iGrnBHwjyxb-TOhayqLUtrhfGqqXCwoYqWaelUM5IgLTLhD81B7QLkioyMjIhY-z0sZsez0AZkQ8uuyIQvnkVRIj27mYWFFMVlwUHV-6Qlcxtxfrw4GMh1RHM-AqjBr_c2svyKjoA-Y6ZuvTERzAQzuRzBw4xqKnrZN2aDBnuk5zyRBGPxxaInIdNGQh0ufKx-FHhr_z_rvor1HjuIXdQuSh4DjyrCdw2cQ7XZ5iXZNQ6vhPXBFBPeAn80HoDxhh17WRHvCOT3GzevlmNk2Km3DfH2qP6Gkk37i2o-dv2MgcstKwZKJBtCxPp_gzYVPxuMH1MqvK8MAwOevnMOpSOTusQ907eDGosoeo27CzAMc3ElJvf2sq_JPuY6pLxhnSsRjPp8m5wvQVbQgZZSEISQCB12iEj9PQum0E7W761r8CY64h2czZJgI1HeMnlm3wuwlwU&appInstanceId=UDS6DAypH3DpBCXNlQDbQgU0CNK9lsWyd6gdVe7ViF0wWpCEt6kweAYRVyjxrh/u&login_hint=&locale=en-US  | 30day.pienov24@yopmail.com |hpcssqa@12  |
            |https://aec-itg.hpcloud.hp.com/landing?state=123456789|hpbw.qauser.g@yopmail.com|test123$|
