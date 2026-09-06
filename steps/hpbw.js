import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then} = createBdd();
import { navigateToUrl, enterData, clickOnButton } from '../utils/navigation.js';
import { Loginpage } from '../pageObjects/login.js';
import { expect } from '@playwright/test';
import { log } from 'node:console';
const test = require('@playwright/test');
import { hpbw } from '../pageObjects/hpbw.js';
const expectedTokensApiResponse = require('../testData/tokensResponse.json');
import fs from 'fs';
import path from 'path';


const detailResponse = {
customerId: '01M1DS0V20EQDPHHAJ4X3N5FK8',
userId: '01M1DS0V1YJSMSE0JN7HS1XPRD',
freeTokens: 0,
welcomeTokens: 1,
demoTokens: 0,
customerTokens: 1,
tokens: [
  {
    tokenType: 'WELCOME',
    skuType: '',
    orderItem: null,
    description: null,
    originalQuantity: 1,
    quantity: 1,
    registeredAt: '2026-09-01T06:03:07Z',
    expiresAt: '2027-08-31T06:03:07Z',
    subscriptionRegisteredAt: '2026-09-01T06:03:07Z',
    subscriptionExpiresAt: '2027-08-31T06:03:07Z',
  },
],
unlimited: null,
hasPermissionToConsumeCustomerTokens: true,
};



/** @type {hpbw} */
let hpbwPageObjects;
let detailApiResponse;
Before(async ({page}) => {
hpbwPageObjects = new hpbw(page); 

await page.route('**/v1/tokens/**', async (route) => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(detailResponse),
  });
});


    // const screenSize = await page.evaluate(() => ({
    // width: window.screen.availWidth,
    // height: window.screen.availHeight,
    // }));
    // await page.setViewportSize(screenSize); 
    // await page.evaluate(() => {
    // document.body.style.zoom = "1.5";
  // });
  const logsDir = path.join(__dirname, 'logs');
  const logFilePath = path.join(logsDir, 'console-logs.txt');
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const logFileName = `console-logs-${timestamp}.txt`;
  const logFilePathWithTimestamp = path.join(logsDir, logFileName);

   const originalLog = console.log;
   console.log = (...args) => {
    originalLog(...args);
    const logMessage = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg) : String(arg))).join(' ') + '\n';
    fs.appendFileSync(logFilePathWithTimestamp, logMessage);
  };
 
});


Given('Open chrome browser and navigate to {string}', async ({page}, url) => {
  await page.goto(url);
  console.log(`Opened browser and navigated to ${url}`);
  await page.waitForTimeout(3000);
});

Then('Open chrome browser and Login to application', async ({page}, datatable) => {
  const {Url,  Username, Password } = datatable.hashes()[0];  
  await page.goto(Url);
  console.log(`Opened browser and navigated to ${Url}`);
  clickOnButton(page, hpbwPageObjects.loginButton);
  enterData(page, hpbwPageObjects.emailAddress, Username);
  clickOnButton(page, hpbwPageObjects.NextButton);
  clickOnButton(page, hpbwPageObjects.usePassword);
  enterData(page, hpbwPageObjects.password, Password);
  clickOnButton(page, hpbwPageObjects.signinButtonHPBW);

});

Then('Click on Login button', async ({page}) => {
  await hpbwPageObjects.loginButton.click();
  console.log('Clicked on Login button');
  await page.waitForTimeout(3000);
});

Then('Click on Sign In button', async ({page}) => {
  await hpbwPageObjects.signInButton.click();
  console.log(`Clicked on Sign in button`)
  await page.waitForTimeout(3000); 
});

Then('Enter email address {string}', async ({page}, arg) => {
  test.setTimeout(160000);
  await hpbwPageObjects.emailAddress.fill(arg, {timeout: 50000}); 
  console.log(`Entered email address ${arg}`)
  await page.waitForTimeout(3000); 
});

Then('Click on use password', async ({page}) => {
  await hpbwPageObjects.usePassword.click()
  console.log(`Click on use password`)
  await page.waitForTimeout(3000); 
});

Then('Enter password {string}', async ({page}, arg) => {
  await hpbwPageObjects.password.fill(arg)
  console.log(`Entered password ${arg}`)
  await page.waitForTimeout(3000); 
});

Then('Click on Next button', async ({page}) => {
  await hpbwPageObjects.NextButton.click();
  console.log('Clicked on Next button')
  await page.waitForTimeout(3000); 
});

Then('Click on Signin button', async ({page}) => {
  await hpbwPageObjects.signinButtonHPBW.waitFor({state: 'visible', timeout: 80000});
  await hpbwPageObjects.signinButtonHPBW.click({timeout: 60000});
  console.log('Clicked on Signin button');
  await page.waitForTimeout(3000);
});

Then('Click on Second Sign In button', async ({page}) => {
  await hpbwPageObjects.secondSignInButton.click();
  console.log(`Clicked on second Sign in button`)
  await page.waitForTimeout(3000); 
});

Then('Click on Tokens button and print detail api details and validate api response', async ({page}) => {
  //initiate response object to wait for the tokens API response
  test.setTimeout(160000);
  const responsePromise = page.waitForResponse(response => response.url().includes('/user?type=tokens') &&  response.request().method() === 'GET', {timeout: 80000});
  const detailResponsePromise = page.waitForResponse((response) => 
    response.url().toLowerCase().includes('/detail'),{ timeout: 80000 },);

  //Click on the tokens button and wait for the response
    await Promise.all([
      responsePromise,
    clickOnButton(page, hpbwPageObjects.tokensButton)]);
    detailApiResponse = await detailResponsePromise;

    //get the response and validate the response data
    const response = await responsePromise;
    const tokensResponseData = await response.json();
    console.log('Tokens API response:', tokensResponseData);

    expect(tokensResponseData.purchaseAvailable).toEqual(expectedTokensApiResponse.purchaseAvailable);
    expect(tokensResponseData.products).toEqual(expectedTokensApiResponse.products);

  const request = detailApiResponse.request();
  const responseBody = await detailApiResponse.text();
  const detailResponseBody = await detailApiResponse.json();

  console.log('detail API response:', detailResponseBody);
  console.log('detail API request headers:', await request.allHeaders());
  console.log('detail API request body:', request.postData() ?? '');
  console.log('detail API response details:', {
    url: detailApiResponse.url(),
    status: detailApiResponse.status(),
    statusText: detailApiResponse.statusText(),
    headers: await detailApiResponse.allHeaders(),
    body: responseBody,
  });


});



  // await page.waitForTimeout(10000);
  // const response = await page.waitForResponse(response => 
  // response.url().includes('/user?type=tokens') && response.request().method === 'GET', {timeout: 80000});
  // await hpbwPageObjects.tokensButton.click();
  // console.log('Clicked on Tokens button');
  // const response2 = await responsePromise;
  // const responseBody = await response2.json();
  // console.log('Tokens API response:', responseBody);
  // await page.waitForTimeout(30000);
// });

Then('Click on Get more tokens', async ({page}) => {
  // await page.pause();
  await hpbwPageObjects.getMoreTokensButton.waitFor({state: 'visible', timeout: 80000});
  await hpbwPageObjects.getMoreTokensButton.click({timeout: 80000});
  // await hpbwPageObjects.getMoreTokensButton.click();
  console.log('Clicked on Get more tokens');
  await page.waitForTimeout(3000);
});

Then('Click on 5 token package', async ({page}) => {
  await hpbwPageObjects.tokenPackageButton.waitFor({state: 'visible', timeout: 80000});
  await hpbwPageObjects.tokenPackageButton.click({timeout: 80000});
  // await hpbwPageObjects.tokenPackageButton.click();
  console.log('Clicked on 5 token package');
  await page.waitForTimeout(3000);
});

Then('Click on Add to Cart', async ({page}) => {
    await hpbwPageObjects.addToCartButton.waitFor({state: 'visible', timeout: 80000});
    await hpbwPageObjects.addToCartButton.click({timeout: 80000});
  console.log('Clicked on 5 token package');
  await page.waitForTimeout(3000);
});

Then('Click on Proceed to Checkout', async ({page}) => {
    await hpbwPageObjects.proceedToCheckoutButton.waitFor({state: 'visible', timeout: 80000});
    await hpbwPageObjects.proceedToCheckoutButton.click({timeout: 80000});
  console.log('Clicked on Proceed to Checkout');
  await page.waitForTimeout(3000);
});

Then('Enter billing details', async ({page}, datatable) => {
  const { FirstName, LastName, AddressLine1, City, State, ZipCode, PhoneNumber, CompanyName } = datatable.hashes()[0];  
  console.log({FirstName,LastName,AddressLine1, City, State, ZipCode, PhoneNumber, CompanyName});
  await enterData(page, hpbwPageObjects.firstNameEditBox, FirstName);
  await enterData(page, hpbwPageObjects.lastNameEditBox, LastName);
  await enterData(page, hpbwPageObjects.addressLine1, AddressLine1);
  await enterData(page, hpbwPageObjects.city, City);
  // await console.log(`Entered state ${State}`);
  const stateLocator = await hpbwPageObjects.state;
  await stateLocator.click();
  await hpbwPageObjects.stateValue.click();
  // clickOnButton(page, hpbwPageObjects.state);
  // clickOnButton(page, hpbwPageObjects.stateValue);
  await enterData(page, hpbwPageObjects.zipCode, ZipCode);
  await enterData(page, hpbwPageObjects.phoneNumber, PhoneNumber);
  await enterData(page, hpbwPageObjects.companyName, CompanyName);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(3000);
  
});


Then('Enter First name {string}', async ({page}, arg) => {
  await hpbwPageObjects.firstNameEditBox.fill(arg);
  console.log(`Entered first name ${arg}`);
  await page.waitForTimeout(3000);
});

Then('Enter Last name {string}', async ({page}, arg) => {
  await hpbwPageObjects.lastNameEditBox.fill(arg);
  console.log(`Entered last name ${arg}`);
  await page.waitForTimeout(3000);
});

Then('Enter Address line1 {string}', async ({page}, arg) => {
  await hpbwPageObjects.addressLine1.fill(arg);
  console.log(`Entered address line1 ${arg}`);
  await page.waitForTimeout(3000);
});

Then('Enter city {string}', async ({page}, arg) => {
  await hpbwPageObjects.city.fill(arg);
  console.log(`Entered city ${arg}`);
  await page.waitForTimeout(3000);
});

Then('Select state {string}', async ({page}, arg) => {
  const stateLocator = await hpbwPageObjects.state;
  await stateLocator.click();
  await hpbwPageObjects.stateValue.click();
  console.log(`Entered state ${arg}`);
  await page.waitForTimeout(3000);
});

Then('Enter zip code {string}', async ({page}, arg) => {
  await hpbwPageObjects.zipCode.fill(arg);
  console.log(`Entered zip code ${arg}`);
  await page.waitForTimeout(3000);
});


Then('Enter phone number {string}', async ({page}, arg) => {
  await hpbwPageObjects.phoneNumber.fill(arg);
  console.log(`Entered phone number ${arg}`);
  await page.waitForTimeout(3000);
});

Then('Enter company name {string}', async ({page}, arg) => {
  await hpbwPageObjects.companyName.fill(arg);
  await page.keyboard.press('Tab');
  console.log(`Entered company name ${arg}`);
  await page.waitForTimeout(3000);
});   

Then('Click on use this address', async ({page}) => {
  await hpbwPageObjects.useThisAddress.click();
  console.log('Clicked on use this address');
  await page.waitForTimeout(3000);
});  

Then('Enter card details', async ({page}, datatable) => {
  const { CardNumber, ExpiryDate, CVV } = datatable.hashes()[0]; 
  console.log(CardNumber, ExpiryDate, CVV); 
  const cardFrameLocator = await hpbwPageObjects.cardFrame;
  const cardNumberInput = cardFrameLocator.locator("//input[@id='txtCardNumber']");
  await cardNumberInput.waitFor({state: 'visible', timeout: 80000});
  await cardNumberInput.fill(CardNumber);
  await console.log(`Entered card number ${CardNumber}`);
  await page.keyboard.press('Tab');
  await console.log(`Entered card number ${CardNumber}`);
  await page.waitForTimeout(3000);

  const expiryDateInput = cardFrameLocator.locator("//input[@id='txtExpMOYYHPOne']");
  await expiryDateInput.waitFor({state: 'visible', timeout: 80000});
  await expiryDateInput.fill(ExpiryDate);
  await console.log(`Entered expiry date ${ExpiryDate}`);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(3000);

  const cvvInput = cardFrameLocator.locator("//input[@id='txtCVV']");
  await cvvInput.waitFor({state: 'visible', timeout: 80000});
  await cvvInput.fill(CVV);
  await console.log(`Entered cvv ${CVV}`);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(3000);

});  

Then('Enter card number {string}', async ({page}, arg) => {
  const cardFrameLocator = await hpbwPageObjects.cardFrame;
  const cardNumberInput = cardFrameLocator.locator("//input[@id='txtCardNumber']");
  await cardNumberInput.waitFor({state: 'visible', timeout: 80000});
  await cardNumberInput.fill(arg);
  // await page.keyboard.press('Tab');
  console.log(`Entered card number ${arg}`);
  await page.waitForTimeout(3000);
});

Then('Enter expiry date {string}', async ({page}, arg) => {
  const cardFrameLocator = await hpbwPageObjects.cardFrame;
  const expiryDateInput = cardFrameLocator.locator("//input[@id='txtExpMOYYHPOne']");
  await expiryDateInput.waitFor({state: 'visible', timeout: 80000});
  await expiryDateInput.fill(arg);
  // await page.keyboard.press('Tab');
  console.log(`Entered expiry date ${arg}`);
  await page.waitForTimeout(3000);
});

Then('Enter cvv {string}', async ({page}, arg) => {
  const cardFrameLocator = await hpbwPageObjects.cardFrame;
  const cvvInput = cardFrameLocator.locator("//input[@id='txtCVV']");
  await cvvInput.waitFor({state: 'visible', timeout: 80000});
  await cvvInput.fill(arg);
  console.log(`Entered cvv ${arg}`);
  await page.keyboard.press('Tab');
  await page.waitForTimeout(3000);
});

Then('Click on use this card', async ({page}) => {
  const cardFrameLocator = await hpbwPageObjects.cardFrame;
  const useThisCardButton = cardFrameLocator.locator("//span[text()='Use this card']/..");
  await useThisCardButton.waitFor({state: 'visible', timeout: 80000});
  await useThisCardButton.click();
  console.log('Clicked on use this card');
  await page.waitForTimeout(3000);
}); 

Then('Click on confirm and purchase', async ({page}) => {
  await hpbwPageObjects.confirmAndPurchaseButton.waitFor({state: 'visible', timeout: 160000});
  await hpbwPageObjects.confirmAndPurchaseButton.click({timeout: 160000});
  console.log('Clicked on confirm and purchase');
  await page.waitForTimeout(3000);
}); 

Then('Click on see orders and invoices', async ({page}) => {
  await hpbwPageObjects.seeOrdersAndInvoices.waitFor({state: 'visible', timeout: 160000});
  await hpbwPageObjects.seeOrdersAndInvoices.click({timeout: 160000});
  console.log('Clicked on see orders and invoices');
  await page.waitForTimeout(3000);
}); 

Then('Check tokens api response', async ({page}) => {

  await page.waitForTimeout(3000);
}); 

