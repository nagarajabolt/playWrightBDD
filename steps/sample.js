import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then} = createBdd();
import { navigateToUrl, enterData } from '../utils/navigation.js';
import { Loginpage } from '../pageObjects/login.js';
import { expect } from '@playwright/test';
import { log } from 'node:console';

let login;
Before(async({page}) => {
login = await new Loginpage(page);  
});

Given('Navigate to properties url', async ({page}) => {
  await navigateToUrl(page, process.env.APP_URL);
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

Then('Enter password {string}' , async ({page}, arg) =>{
    await enterData(page, login.password_textBox , arg)
    await page.waitForTimeout(3000); 
    await console.log(`Entered password: ${arg}`)
});

Then('Click on Login Button' , async ({page}) =>{
  await login.loginButton.click();
  await page.waitForTimeout(3000); 
  await console.log(`Clicked on Login button`)
});

When('Open the product filter', async () => {
  await login.productFilter.click();
});

Then('Validate the product filter options are available', async ({}, dataTable) => {
  const expectedOptions = dataTable.raw().map(([option]) => option);
  await expect(login.productFilter.locator('option')).toHaveText(expectedOptions);
});

When('Open the navigation menu', async () => {
  await login.navigationMenuButton.click();
});

Then('Click on Logout', async () => {
  await login.logoutLink.click();
});

Then('Validate header text is: {string}' , async ({page}, arg) =>{
  const header = await login.headerText;
  await expect(header).toHaveText(arg);
  await page.waitForTimeout(3000); 
  await console.log(`Header text is matching`)
});