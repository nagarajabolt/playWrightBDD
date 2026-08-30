import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then} = createBdd();
import { navigateToUrl, enterData } from '../utils/navigation.js';
import { Loginpage } from '../pageObjects/login.js';
import { expect } from '@playwright/test';
import { log } from 'node:console';

//page object file initialization
let login;
Before(async({page}) => {
login = await new Loginpage(page);  
});

Given('Navigate to properties url', async ({page}) => {
  await navigateToUrl(page, process.env.APP_URL);
  await page.evaluate(() => document.body.style.zoom = '50%');
  await page.waitForTimeout(3000); 
});

Given('Navigate to {string}', async ({page}, arg) => {
  await navigateToUrl(page, arg);
  await page.waitForTimeout(3000); 
});

Then('Close browser' , async ({page}) =>{
  if(page){
    await page.close();
  }
});

Then('Enter username {string}' , async ({page}, arg) =>{ 
    await enterData(page, login.username_textBox, arg)
    await page.waitForTimeout(3000); 
    await console.log(`Entered username: ${arg}`)
});

Then('Enter password for sample{string}' , async ({page}, arg) =>{
    await enterData(page, login.password_textBox , arg)
    await page.waitForTimeout(3000); 
    await console.log(`Entered password: ${arg}`)
});

Then('Click on Login Button' , async ({page}) =>{
  await login.loginButton.click();
  await page.waitForTimeout(3000); 
  await console.log(`Clicked on Login button`)
});

Then('Validate header text is: {string}' , async ({page}, arg) =>{
  const header = await login.headerText;
  await expect(header).toHaveText(arg);
  await page.waitForTimeout(3000); 
  await console.log(`Header text is matching`)
});