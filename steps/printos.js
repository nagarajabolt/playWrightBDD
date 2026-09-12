import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then} = createBdd();
import { expect } from '@playwright/test';
const test = require('@playwright/test');
import * as navigation from '../utils/navigation.js';
import { printos } from '../pageObjects/printos.js';


/** @type {printos} */
let printosPageObjects;

Before(async ({page}) => {
printosPageObjects = new printos(page); 

});


Given('Open chrome browser and navigate to {string}', async ({page}, url) => {
  await page.goto(url);
  console.log(`Opened browser and navigated to ${url}`);
  await page.waitForTimeout(3000);
});

Then('Click on My applications button', async ({page}) => {
  await page.waitForLoadState('networkidle');
  navigation.clickOnButton(page, printosPageObjects.applicationsButton);
  await page.waitForTimeout(3000);
});

Then('Click on Organization Menu', async ({page}) => {
  await page.waitForLoadState('networkidle');
  navigation.clickOnButton(page, printosPageObjects.organizationMenu);
  await page.waitForTimeout(3000);
});

Then('Print all org names', async ({page}) => {
    const orgNames = await printosPageObjects.organizationListBox;
    const itemCount = await orgNames.count();
    console.log(`Total number of organizations: ${itemCount}`);

    for (let i = 0; i < itemCount; i++) {
        const orgName = await orgNames.nth(i).textContent();
        console.log(`Organization ${i + 1}: ${orgName}`);
    }
});