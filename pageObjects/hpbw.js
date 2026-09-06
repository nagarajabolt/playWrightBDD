export const hpbw = class hpbw{

    constructor(page){
        this.page = page
        this.signInButton = page.locator('#pros-signin-button');
        this.loginButton = page.getByRole('button', { name: /log\s*in/i }).first();
        this.emailAddress = page.locator('span', { hasText: /^Email address$/ });
        this.NextButton = page.getByText('Next', { exact: true })
        this.usePassword = page.getByText('Use password', { exact: true })
        this.password = page.locator('#password')
        this.secondSignInButton = page.locator('#sign-in')
        this.signinButton = page.getByRole('button', { name: /sign\s*in/i }).first();
        this.signinButtonHPBW = page.getByRole('button', { name: 'submit-button' })
        this.tokensButton =  page.locator("//span[text()=' Tokens ']")
        this.getMoreTokensButton = page.getByRole('button', { name: /get more tokens/i }).first();
        this.tokenPackageButton = page.getByText('5 Token Package', { exact: true })
        this.addToCartButton = page.getByText(' Add to Cart ', { exact: true })
        this.proceedToCheckoutButton = page.getByRole('button', { name: /proceed to checkout/i }).first();

        this.firstNameEditBox = page.getByRole('textbox', { name: 'First name' })
        this.lastNameEditBox = page.getByRole('textbox', { name: 'Last name' })   
        this.addressLine1 = page.getByRole('textbox', { name: 'Address line 1' })  
        this.city = page.getByRole('textbox', { name: 'City' }) 
        this.state = page.locator("//input[@id='vn-select-:r6:']")
        this.stateValue = page.locator(`//li[@role='option']//span[text()='Wyoming']/..`);

        this.zipCode = page.getByRole('textbox', { name: 'Zip code' }) 
        this.phoneNumber = page.getByRole('textbox', { name: 'Phone number' }) 
        this.companyName = page.getByRole('textbox', { name: 'Company name (Optional)' }) 
        this.useThisAddress = page.locator("//span[text()='Use this address']/..") 
        this.cardFrame = page.frameLocator("//iframe[@id='pgs_iframe']")
        this.cardNumber1 = page.locator("//input[@id='txtCardNumber']/following-sibling::label")
        this.enterYourPaymentInfo = page.locator("//label[text()='Enter your payment information']/..") 
        // this.cardNumber1 = page.locator("//input[@id='txtCardNumber']/..") 
        this.cardNumber2 = page.locator("//input[@id='txtCardNumber']") 
        this.expirationDate = page.locator("//input[@id='txtExpMOYYHPOne']") 
        this.cvc = page.locator("//input[@id='txtCVV']") 
        this.postalCode = page.locator("//input[@id='txtPostalCode']") 
        this.useThisCard = page.locator("//span[text()='Use this card']/..")
        this.useTHiscard = page.locator("//button[@id='btn_hpone_card_add_1']")
        this.confirmAndPurchaseButton = page.getByRole('button', { name: 'Confirm and Purchase' })
        this.seeOrdersAndInvoices = page.locator("//div[text()='See orders and invoices']/..")

    }
        // stateValue(stateName) {
        //     return this.page.locator(`//li[@role='option']//span[text()='Wyoming']`);
        // return this.page(`///span[text()='${stateName}']/../..`);}



}