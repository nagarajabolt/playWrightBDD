import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then} = createBdd();
import { navigateToUrl, enterData } from '../utils/navigation.js';
import { Loginpage } from '../pageObjects/login.js';
import { expect } from '@playwright/test';
import { log } from 'node:console';
const test = require('@playwright/test');
import { hpbw } from '../pageObjects/hpbw.js';

/** @type {hpbw} */
let hpbwPageObjects;
Before(async ({page}) => {
hpbwPageObjects = new hpbw(page); 
    // const screenSize = await page.evaluate(() => ({
    // width: window.screen.availWidth,
    // height: window.screen.availHeight,
    // }));
    // await page.setViewportSize(screenSize); 
    await page.evaluate(() => {
    document.body.style.zoom = "1.5";
  });
});

Given('Open chrome browser and navigate to {string}', async ({page}, url) => {
  await page.goto(url);
  console.log(`Opened browser and navigated to ${url}`);
  await page.waitForTimeout(3000);
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

Then('Click on 6 Tokens button', async ({page}) => {
  await hpbwPageObjects.tokensButton.click();
  console.log('Clicked on Tokens button');
  // await page.waitForTimeout(30000);
});

Then('Click on Get more tokens', async ({page}) => {
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

