import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then } = createBdd();
import { expect } from '@playwright/test';
const test = require('@playwright/test');
import * as navigation from '../utils/navigation.js';
import { printos } from '../pageObjects/printos.js';
import { printosutils } from '../utils/printOsUtils.js'


const ELEMENT_TIMEOUT = process.env.ELEMENT_TIMEOUT ? parseInt(process.env.ELEMENT_TIMEOUT) : 950000;
/** @type {printos} */
let printosPageObjects;


Before(async ({ page }) => {
  printosPageObjects = new printos(page);

});


Given('Open chrome browser and navigate to {string}', async ({ page }, url) => {
  await page.goto(url);
  console.log(`Opened browser and navigated to ${url}`);
  await page.waitForTimeout(3000);
});

Then('Click on My applications button', async ({ page }) => {
  //   await page.waitForLoadState('networkidle');
  const acceptButton = await printosPageObjects.AcceptButton;
  try {
    await page.waitForTimeout(5000);
    await navigation.clickOnButton(page, acceptButton)
  } catch (e) {
    console.log("Accept button not found");
  }
  const applicationsButton = await printosPageObjects.applicationsButton;
  await navigation.clickOnButton(applicationsButton)
  await page.waitForTimeout(3000);

});

Then('Click on Organization Menu', async ({ page }) => {

  const organizationMenu = await printosPageObjects.organizationMenu;
  await navigation.clickOnButton(organizationMenu.nth(1))

});

Then('Print all org names', async ({ page }) => {
     
      try {
        const applicationsButton = await printosPageObjects.applicationsButton;
        await navigation.clickOnButton(page, applicationsButton)

        const organizationMenu = await printosPageObjects.organizationMenu;
        await navigation.clickOnButton(page, organizationMenu.nth(1))
      } catch (error) {

        const applicationsButton = await printosPageObjects.applicationsButton;
        await navigation.clickOnButton(page, applicationsButton)
        const organizationMenu = await printosPageObjects.organizationMenu;
        await navigation.clickOnButton(page, organizationMenu.nth(1))
      
      }

  const sharedOrgNames = new Set();
  const searchInput = page.locator("//input[@id='pros-app-switcher-options-search-input-input']");

  // 1. 🔄 RESET STEP: Scroll the container to the absolute top to reveal missing elements
  const scrollContainer = page.locator("#pros-app-switcher-options");
  await scrollContainer.evaluate(el => el.scrollTop = 0);
  await page.waitForTimeout(500);

  // 2. Click the search input bar to focus the list box wrapper
  await searchInput.click();
  await page.waitForTimeout(300);

  // 3. Force selection cursor to the absolute first element by tapping Up
  for (let u = 0; u < 5; u++) {
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(50);
  }

  let previousSetSize = -1;
  let currentSetSize = 0;
  let stableAttempts = 0;

  console.log("Starting full-range viewport chunk extraction from the very top...");

  // 4. Loop down until the unique items set stops growing completely
  while (stableAttempts < 40) {

    // Capture EVERY single row text node currently mounted in the viewport
    const visibleItems = await page.locator("div[id^='pros-option-row-']").allTextContents();

    visibleItems.forEach(item => {
      if (item.trim()) {
        sharedOrgNames.add(item.trim());
      }
    });

    previousSetSize = currentSetSize;
    currentSetSize = sharedOrgNames.size;

    if (currentSetSize > previousSetSize) {
      // console.log(`Unique items collected: ${currentSetSize}`);
      stableAttempts = 0;
    } else {
      stableAttempts++;
    }

    // Command the keyboard to tap down to the next row option
    await page.keyboard.press('ArrowDown');

    // Optimal rendering pause for virtualized lists
    await page.waitForTimeout(150);

  }

  // 5. Output final unique result array
  const finalOrgList = Array.from(sharedOrgNames);
  // console.log(`\n🎉 Collection Complete! Total unique items captured: ${finalOrgList.length}`);
  // console.log(finalOrgList);
  cleanedOrgList = finalOrgList.map(item => item.replace(' Print Service Provider', '').trim());

  // 3. Print out your final cleaned array
  console.log(`\n🎉 Collection & Cleanup Complete! Total unique items: ${cleanedOrgList.length}`);
  console.log(cleanedOrgList);

  await navigation.clickOnButton(page, printosPageObjects.applicationsButton)

});


Then('Fetch status of all orgs', async ({ page }) => {
  let cleanedOrgList = [
  // "Alabama 1",
  // "Alabama 2",
  // "Alabama 3",
  // "Alabama 4",
  // "Amazon 1",
  // "Amazon 10",
  // "Amazon 11",
  // "Amazon 12",
  // "Amazon 2",
  // "Amazon 3",
  // "Amazon 4",
  // "Amazon 5",
  // "Amazon 6",
  // "Amazon 7",
  // "Amazon 8",
  // "Amazon 9",
  // "Backdated 30DD 1",
  // "Backdated 360DD 3",
  // "Backdated 365DD 4",
  // "Backdated 40DD 2",
  // "Bizops_01",
  // "Bizops_10",
  // "Bizops_11",
  // "Bizops_12",
  // "Bizops_13",
  // "Bizops_14",
  // "Bizops_15",
  // "Bizops_16",
  // "Bizops_17",
  // "Bizops_18",
  // "Bizops_19",
  // "Bizops_2",
  // "Bizops_20",
  // "Bizops_21",
  // "Bizops_22",
  // "Bizops_23",
  // "Bizops_24",
  // "Bizops_25",
  // "Bizops_26",
  // "Bizops_27",
  // "Bizops_28",
  // "Bizops_29",
  // "Bizops_3",
  // "Bizops_30",
  // "Bizops_4",
  // "Bizops_5",
  // "Bizops_6",
  // "Bizops_7",
  // "Bizops_8",
  // "Bizops_9",
  // "checkout_mfe 1",
  // "checkout_mfe 10",
  // "checkout_mfe 11",
  // "checkout_mfe 12",
  // "checkout_mfe 13",
  // "checkout_mfe 14",
  // "checkout_mfe 15",
  // "checkout_mfe 16",
  // "checkout_mfe 17",
  // "checkout_mfe 18",
  // "checkout_mfe 19",
  // "checkout_mfe 2",
  // "checkout_mfe 20",
  // "checkout_mfe 21",
  // "checkout_mfe 22",
  // "checkout_mfe 23",
  // "checkout_mfe 24",
  // "checkout_mfe 25",
  // "checkout_mfe 26",
  // "checkout_mfe 27",
  // "checkout_mfe 28",
  // "checkout_mfe 29",
  // "checkout_mfe 3",
  // "checkout_mfe 30",
  // "checkout_mfe 4",
  // "checkout_mfe 5",
  // "checkout_mfe 6",
  // "checkout_mfe 7",
  // "checkout_mfe 8",
  // "checkout_mfe 9",
  // "Final Fraud 1",
  // "Florida 1",
  // "Florida 2",
  // "Florida 3",
  // "Florida 4",
  // "Hawaii 10",
  // "Hawaii 11",
  // "Hawaii 12",
  // "Hawaii 13",
  // "Hawaii 14",
  // "Hawaii 15",
  // "Hawaii 16",
  // "Hawaii 17",
  // "Hawaii 18",
  // "Hawaii 19",
  // "Hawaii 2",
  // "Hawaii 20",
  // "Hawaii 21",
  // "Hawaii 22",
  // "Hawaii 23",
  // "Hawaii 24",
  // "Hawaii 25",
  // "Hawaii 26",
  // "Hawaii 27",
  // "Hawaii 28",
  // "Hawaii 29",
  // "Hawaii 3",
  // "Hawaii 30",
  // "Hawaii 31",
  // "Hawaii 32",
  // "Hawaii 33",
  // "Hawaii 34",
  // "Hawaii 35",
  // "Hawaii 36",
  // "Hawaii 37",
  // "Hawaii 38",
  // "Hawaii 39",
  // "Hawaii 4",
  // "Hawaii 40",
  // "Hawaii 41",
  // "Hawaii 42",
  // "Hawaii 43",
  // "Hawaii 44",
  // "Hawaii 45",
  // "Hawaii 46",
  // "Hawaii 47",
  // "Hawaii 48",
  // "Hawaii 49",
  // "Hawaii 5",
  // "Hawaii 50",
  // "Hawaii 51",
  // "Hawaii 6",
  // "Hawaii 7",
  // "Hawaii 8",
  // "Hawaii 9",
  // "lf_monetization number 1",
  // "lf_monetization number 10",
  // "lf_monetization number 11",
  // "lf_monetization number 12",
  // "lf_monetization number 13",
  // "lf_monetization number 14",
  // "lf_monetization number 15",
  // "lf_monetization number 16",
  // "lf_monetization number 17",
  // "lf_monetization number 18",
  // "lf_monetization number 19",
  // "lf_monetization number 2",
  // "lf_monetization number 20",
  // "lf_monetization number 3",
  // "lf_monetization number 4",
  // "lf_monetization number 5",
  // "lf_monetization number 6",
  // "lf_monetization number 7",
  // "lf_monetization number 8",
  // "lf_monetization number 9",
  // "Los Angeles 1",
  // "Miami Organization",
  // "Miami Organization - Coral Gables",
  // "Miami Organization - Doral",
  // "Miami Organization - Florida 1",
  // "Miami Organization - Hialeah",
  // "Miami Organization - Kendall",
  "Minnesota 1",
  "Minnesota 2",
  "Minnesota 3",
  "Minnesota 4",
  "Second Address 1",
  "Test Organization 1",
  "Texas 1",
  "Texas 2",
  "Texas 3",
  "Texas 4",
  "Texas 5",
  "Texas 6",
  "Wyoming 1",
  "Wyoming 10",
  "Wyoming 11",
  "Wyoming 12",
  "Wyoming 13",
  "Wyoming 19",
  "Wyoming 2",
  "Wyoming 20",
  "Wyoming 21",
  "Wyoming 3",
  "Wyoming 4",
  "Wyoming 5",
  "Wyoming 6",
  "Wyoming 7",
  "Wyoming 8",
  "Wyoming 9"
];
  console.log(cleanedOrgList)
  test.setTimeout(0);

  let currentOrg;
  let expiredSet;
  let subscribedSet;
  let availableSet;

  for (let i = 0; i < cleanedOrgList.length; i++) {
    currentOrg = cleanedOrgList[i]
    console.log(`Org No: ${i + 1} and Org Name:${currentOrg}`);

    try {
      try {
        const applicationsButton = await printosPageObjects.applicationsButton;
        await navigation.clickOnButton(page, applicationsButton)

        const organizationMenu = await printosPageObjects.organizationMenu;
        await navigation.clickOnButton(page, organizationMenu.nth(1))
      } catch (error) {

        const applicationsButton = await printosPageObjects.applicationsButton;
        await navigation.clickOnButton(page, applicationsButton)
        const organizationMenu = await printosPageObjects.organizationMenu;
        await navigation.clickOnButton(page, organizationMenu.nth(1))
      
      }

      // await page.pause()
      // --- STEP 1: Search and Select the Organization ---
      const searchInput = page.locator("//input[@id='pros-app-switcher-options-search-input-input']");
      await navigation.clickOnButton(page, searchInput)
      await searchInput.fill(currentOrg);
      await page.waitForTimeout(300); // Small pause for the filter to update

      // Select the matched option row (matching the exact text)
      const matchedRow = page.locator(`div[id^='pros-option-row-']:has-text('${currentOrg}')`).first();
      await navigation.clickOnButton(page, matchedRow)
      await navigation.waitForPageLoad(page);
      await printosPageObjects.overViewHeader.waitFor();
      const applicationsButton = await printosPageObjects.applicationsButton;
      await navigation.clickOnButton(page, applicationsButton)
      const marketplaceOption = printosPageObjects.marketPlace
      await navigation.clickOnButton(page, marketplaceOption)

      await navigation.waitForPageLoad(page);
      await printosPageObjects.status.waitFor()
      await navigation.waitForPageLoad(page);
      const status = await printosPageObjects.status.allTextContents();

      if(status.includes("Expired")){
        expiredSet = expiredSet || new Set();
        expiredSet.add(currentOrg)
      }else if(status.includes("Subscribed")){
        subscribedSet = subscribedSet || new Set();
        subscribedSet.add(currentOrg)
      }else if(status.includes("Available for Purchase")){
        availableSet = availableSet || new Set();
        availableSet.add(currentOrg)
      }

      console.log(`Status found for ${currentOrg}:`, status.length ? status : "No status badge detected");
      await page.goBack()
      await printosPageObjects.overViewHeader.waitFor()

      // }
    } catch (error) {
      await page.goBack()
      // await printosPageObjects.overViewHeader.waitFor()
    }
  console.log(`-------------------------------------------`);
  console.log(`Expired Set:`, Array.from(expiredSet || []));
  console.log(`Subscribed Set:`, Array.from(subscribedSet || []));
  console.log(`Available Set:`, Array.from(availableSet || []));
  console.log(`-------------------------------------------`);
  }


});

Then('Click on accept button', async ({ page }) => {
  await page.waitForTimeout(10000);
  const acceptButton = await printosPageObjects.AcceptButton;
    try {
      await navigation.clickOnButton(page, acceptButton)
      await page.waitForTimeout(3000);

      } catch (e) {
      console.log("Accept button not found");
    }
});


Then('Fetch api details of Subscribed orgs', async ({ page }) => {
  let currentOrg;
  let subscribedList = [
  // "Alabama 1",
  // "Alabama 2",
  // "Alabama 3",
  // "Alabama 4",
  // "Amazon 1",
  // "Amazon 10",
  // "Amazon 11",
  // "Amazon 12",
  // "Amazon 2",
  // "Amazon 3",
  // "Amazon 4",
  // "Amazon 5",
  // "Amazon 6",
  // "Amazon 7",
  // "Amazon 8",
  // "Amazon 9",
  // "Backdated 30DD 1",
  // "Backdated 360DD 3",
  // "Backdated 365DD 4",
  // "Backdated 40DD 2",
  // "Bizops_01",
  // "Bizops_10",
  // "Bizops_11",
  // "Bizops_12",
  // "Bizops_13",
  // "Bizops_14",
  // "Bizops_15",
  // "Bizops_16",
  // "Bizops_17",
  // "Bizops_18",
  // "Bizops_19",
  // "Bizops_2",
  // "Bizops_20",
  // "Bizops_21",
  // "Bizops_22",
  // "Bizops_23",
  // "Bizops_24",
  // "Bizops_25",
  // "Bizops_26",
  // "Bizops_27",
  // "Bizops_28",
  // "Bizops_29",
  // "Bizops_3",
  // "Bizops_30",
  // "Bizops_4",
  // "Bizops_5",
  // "Bizops_6",
  // "Bizops_7",
  // "Bizops_8",
  // "Bizops_9",
  // "checkout_mfe 1",
  // "checkout_mfe 10",
  // "checkout_mfe 11",
  // "checkout_mfe 12",
  // "checkout_mfe 13",
  // "checkout_mfe 14",
  // "checkout_mfe 15",
  // "checkout_mfe 16",
  // "checkout_mfe 17",
  // "checkout_mfe 18",
  // "checkout_mfe 19",
  // "checkout_mfe 2",
  // "checkout_mfe 20",
  // "checkout_mfe 21",
  // "checkout_mfe 22",
  // "checkout_mfe 23",
  // "checkout_mfe 24",
  // "checkout_mfe 25",
  // "checkout_mfe 26",
  // "checkout_mfe 27",
  // "checkout_mfe 28",
  // "checkout_mfe 29",
  // "checkout_mfe 3",
  // "checkout_mfe 30",
  // "checkout_mfe 4",
  // "checkout_mfe 5",
  // "checkout_mfe 6",
  // "checkout_mfe 7",
  // "checkout_mfe 8",
  // "checkout_mfe 9",
  // "Final Fraud 1",
  // "Florida 1",
  // "Florida 2",
  // "Florida 3",
  // "Florida 4",
  // "Hawaii 10",
  // "Hawaii 11",
  // "Hawaii 12",
  // "Hawaii 13",
  // "Hawaii 14",
  // "Hawaii 15",
  // "Hawaii 16",
  // "Hawaii 17",
  // "Hawaii 18",
  // "Hawaii 19",
  // "Hawaii 2",
  // "Hawaii 20",
  // "Hawaii 21",
  // "Hawaii 22",
  // "Hawaii 23",
  "Hawaii 24",
  "Hawaii 25",
  "Hawaii 26",
  "Hawaii 27",
  "Hawaii 28",
  "Hawaii 29",
  "Hawaii 3",
  "Hawaii 30",
  "Hawaii 31",
  "Hawaii 32",
  "Hawaii 33",
  "Hawaii 34",
  "Hawaii 35",
  "Hawaii 36",
  "Hawaii 37",
  "Hawaii 38",
  "Hawaii 39",
  "Hawaii 4",
  "Hawaii 40",
  "Hawaii 41",
  "Hawaii 42",
  "Hawaii 43",
  "Hawaii 44",
  "Hawaii 45",
  "Hawaii 46",
  "Hawaii 47",
  "Hawaii 48",
  "Hawaii 49",
  "Hawaii 5",
  "Hawaii 50",
  "Hawaii 51",
  "Hawaii 6",
  "Hawaii 7",
  "Hawaii 8",
  "Hawaii 9",
  "lf_monetization number 1",
  "lf_monetization number 10",
  "lf_monetization number 11",
  "lf_monetization number 12",
  "lf_monetization number 13",
  "lf_monetization number 14",
  "lf_monetization number 15",
  "lf_monetization number 16",
  "lf_monetization number 17",
  "lf_monetization number 18",
  "lf_monetization number 19",
  "lf_monetization number 2",
  "lf_monetization number 20",
  "lf_monetization number 3",
  "lf_monetization number 4",
  "lf_monetization number 5",
  "lf_monetization number 6",
  "lf_monetization number 7",
  "lf_monetization number 8",
  "lf_monetization number 9",
  "Los Angeles 1",
  "Miami Organization",
  "Miami Organization - Coral Gables",
  "Miami Organization - Doral",
  "Miami Organization - Florida 1",
  "Miami Organization - Hialeah",
  "Miami Organization - Kendall",
  "Minnesota 1",
  "Minnesota 2",
  "Minnesota 3",
  "Minnesota 4",
  "Second Address 1",
  "Test Organization 1",
  "Texas 1",
  "Texas 2",
  "Texas 3",
  "Texas 4",
  "Texas 5",
  "Texas 6",
  "Wyoming 1",
  "Wyoming 10",
  "Wyoming 11",
  "Wyoming 12",
  "Wyoming 13",
  "Wyoming 19",
  "Wyoming 2",
  "Wyoming 20",
  "Wyoming 21",
  "Wyoming 3",
  "Wyoming 4",
  "Wyoming 5",
  "Wyoming 6",
  "Wyoming 7",
  "Wyoming 8",
  "Wyoming 9"
];
  console.log(`Subscribed list: ${subscribedList}`)
  test.setTimeout(0);

  const orgDataStore = new Map();
  const activeAndWithInRemorse = new Map();
  const activeAndPostRemorse = new Map();
  const cancelledPostRemorse = new Map();
  const cancelledWithInRemorse = new Map();
  const expired = new Map();

  let subscriptionResponsePromise;
  let subscriptionApiResponse;
  let statusCode;
  let responseBody;

    // await page.pause();
   for (let i = 0; i < subscribedList.length; i++) {
    currentOrg = subscribedList[i]
    console.log(`Org No: ${i + 1} and Org Name:${currentOrg}`);
    // const orgId = currentOrg;
    // await page.pause();
    try {
      try {
        await navigation.clickOnButton(page, printosPageObjects.applicationsButton)
        const organizationMenu = await printosPageObjects.organizationMenu;
        await organizationMenu.nth(1).waitFor();
        await organizationMenu.nth(1).click();
        // await navigation.clickOnButton(page, organizationMenu.nth(1))
        console.log(`Clicked on Organization Menu`);
      } catch (error) {

        await navigation.clickOnButton(page, printosPageObjects.applicationsButton)
        const organizationMenu = await printosPageObjects.organizationMenu;
        await organizationMenu.nth(1).waitFor();
        await organizationMenu.nth(1).click();
        // await navigation.clickOnButton(page, organizationMenu.nth(1))
        console.log(`Clicked on Organization Menu`);
      
      }

      // --- STEP 1: Search and Select the Organization ---
      const searchInput = await printosPageObjects.organizationOptionSearchInput;
      await navigation.clickOnButton(page, searchInput)
      await searchInput.fill(currentOrg);
      await page.waitForTimeout(300); // Small pause for the filter to update


      // Select the matched option row (matching the exact text)
      // const matchedRow = await page.locator(`div[id^='pros-option-row-']:has-text('${currentOrg}')`).first();
      await navigation.clickOnButton(page, page.locator(`div[id^='pros-option-row-']:has-text('${currentOrg}')`).first())
      await navigation.waitForPageLoad(page);
      // await printosPageObjects.overViewHeader.waitFor();
      await navigation.clickOnButton(page, printosPageObjects.applicationsButton)
      await navigation.clickOnButton(page, printosPageObjects.marketPlace)

      // try {
      //   await navigation.clickOnButton(page, printosPageObjects.continueWithoutUpgrading)        
      // } catch (error) {
      //   console.log("Continue without upgrade button is not displayed")
      // }

      await navigation.waitForPageLoad(page);
      await printosPageObjects.status.waitFor()
      await navigation.waitForPageLoad(page);
      await navigation.clickOnButton(page, printosPageObjects.printServicePlanTab)
      
      try {
      subscriptionResponsePromise = page.waitForResponse(response =>
      response.url().includes('/productionhub/subscription-state/v2/subscriptions/'),
        { timeout: 60000 });
      
      await Promise.all([subscriptionResponsePromise,
        navigation.clickOnButton(page, printosPageObjects.manageButton),  
        printosPageObjects.ProductionHubHeader.waitFor({ state: 'visible' }),
        page.waitForTimeout(3000),       
      ]);

      subscriptionApiResponse = await subscriptionResponsePromise;

      statusCode = await subscriptionApiResponse.status();
      responseBody = await subscriptionApiResponse.json();

      console.log(`API Status Code: ${statusCode}`, `API JSON Response for org: ${currentOrg}`);
      console.log(`---------------------------------------------------`)        
      console.log(JSON.stringify(responseBody, null, 2));
      console.log(`---------------------------------------------------`)

       expect(statusCode).toBe(200);
        
      } catch (error) {
        console.debug("Manage dashboard is not loaded")  
      }

      orgDataStore.set(currentOrg,  {
        state: responseBody.state,
        remorseEndDate: responseBody.attributes?.remorseEndDate ?? "N/A",
        autoRenewal: responseBody.attributes?.autoRenewal ?? "N/A",
        stateReason: responseBody.attributes?.stateReason ?? "N/A"
      });

      const remorseEnd = new Date(responseBody.attributes?.remorseEndDate);
      const now = new Date();

      if (responseBody.attributes?.stateReason === "subscriptionActivation"){
         if (now > remorseEnd) {
         activeAndPostRemorse.set(currentOrg, {remorseEndDate: responseBody.attributes?.remorseEndDate});
        } else{
           activeAndWithInRemorse.set(currentOrg, { remorseEndDate: responseBody.attributes?.remorseEndDate });
        }
      } else if(responseBody.attributes?.stateReason === "toggleAutoRenewal"){
          cancelledPostRemorse.set(currentOrg, {remorseEndDate: responseBody.attributes?.remorseEndDate})
      } else if(responseBody.attributes?.stateReason === "cancelWithinRemorse"){
          cancelledWithInRemorse.set(currentOrg, {remorseEndDate: responseBody.attributes?.remorseEndDate})
      }else if(responseBody.attributes?.stateReason === "cancelPaymentFailure"){
          expired.set(currentOrg, {remorseEndDate: responseBody.attributes?.remorseEndDate})
      }


    } catch (error) {
      console.log(error)
      await page.waitForTimeout(10000)
        await page.reload()
        await page.goBack()
        console.log('page is not loaded')
    }  

      console.log(`----------Active and Post Remorse-------------`)
      activeAndPostRemorse.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});
      console.log(`-----------------------------------------------`)      

      console.log(`----------Active and Within Remorse-------------`)
      activeAndWithInRemorse.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});
      console.log(`-----------------------------------------------`)

      console.log(`----------Cancelled Within Remorse-------------`)
      cancelledWithInRemorse.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});
      console.log(`-----------------------------------------------`)

      console.log(`----------Cancelled post Remorse-------------`)
      cancelledPostRemorse.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});
      console.log(`---------------------------------------------`)

      console.log(`--------------Expired----------------`)
      expired.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});
      console.log(`---------------------------------------------`)

      orgDataStore.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
       State: ${values.state}, 
       RemorseEndDate: ${values.remorseEndDate},
       AutoRenewal: ${values.autoRenewal}, 
       Reason: ${values.stateReason}`)});
}
});