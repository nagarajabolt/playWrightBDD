import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then} = createBdd();
import { navigateToUrl, enterData } from '../utils/navigation.js';
import { Loginpage } from '../pageObjects/login.js';
import { expect } from '@playwright/test';
import { log } from 'node:console';
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
  await hpbwPageObjects.emailAddress.fill(arg)
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
  await hpbwPageObjects.signinButton.click();
  console.log('Clicked on Signin button');
  await page.waitForTimeout(3000);
});

Then('Click on Second Sign In button', async ({page}) => {
  await hpbwPageObjects.secondSignInButton.click();
  console.log(`Clicked on second Sign in button`)
  await page.waitForTimeout(3000); 
});

Then('Click on Tokens button', async ({page}) => {
  await hpbwPageObjects.tokensButton.click();
  console.log('Clicked on Tokens button');
  await page.waitForTimeout(3000);
});

Then('Click on Get more tokens', async ({page}) => {
  await hpbwPageObjects.getMoreTokensButton.click();
  console.log('Clicked on Get more tokens');
  await page.waitForTimeout(3000);
});

Then('Click on 5 token package', async ({page}) => {
  await hpbwPageObjects.tokenPackageButton.click();
  console.log('Clicked on 5 token package');
  await page.waitForTimeout(3000);
});