import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then } = createBdd();
import { expect } from '@playwright/test';
const test = require('@playwright/test');
import * as navigation from '../utils/navigation.js';
import { printos } from '../pageObjects/printos.js';



const ELEMENT_TIMEOUT = process.env.ELEMENT_TIMEOUT ? parseInt(process.env.ELEMENT_TIMEOUT) : 950000;
/** @type {printos} */
let printosPageObjects;
let cleanedOrgList = [
  // "Miami Organization - Kendall",
  "Minnesota 1",
  // "Minnesota 2",
  // "Minnesota 3",
  // "Minnesota 4",
  // "Test Organization 1",
  // "Texas 1",
  // "Texas 2",
  // "Texas 3",
  // "Texas 4",
  // "Texas 5",
  // "Texas 6",
  // "Wyoming 1",
  // "Wyoming 10",
  // "Wyoming 11",
  // "Wyoming 12",
  // "Wyoming 13",
  // "Wyoming 19",
  // "Wyoming 2",
  // "Wyoming 20",
  // "Wyoming 21",
  // "Wyoming 3",
  // "Wyoming 4",
  // "Wyoming 5",
  // "Wyoming 6",
  // "Wyoming 7",
  // "Wyoming 8",
  "Wyoming 9"];

  // let subscribedList = [ "Alabama 4", "Amazon 3", "Amazon 6", "Amazon 7", "Amazon 8" ];
  let subscribedList = [ 
//     "Alabama 1", 
//     "Bizops_29", 
//     "Alabama 3", 
//     "Alabama 2",
//   "Alabama 4",
// "Amazon 3",
"Amazon 6",
"Amazon 7",
"Amazon 8",
"Backdated 360DD 3",
"Backdated 40DD 2",
"Bizops_21",
"Bizops_5",
"Bizops_8",
"checkout_mfe 10",
"checkout_mfe 11",
"checkout_mfe 12",
"checkout_mfe 23",
"Final Fraud 1",
"Hawaii 11",
"Hawaii 17",
"Hawaii 23",
"Hawaii 24",
"Hawaii 26",
"Hawaii 27",
"Hawaii 28",
"Hawaii 31",
"Hawaii 32",
"Hawaii 33",
"Hawaii 43",
"Hawaii 45",
"Hawaii 46",
"Miami Organization",
"Miami Organization - Coral Gables",
"Miami Organization - Hialeah",
"Test Organization 1",
"Wyoming 10",
"Wyoming 19",
"Wyoming 20",
"Wyoming 21",
"Wyoming 6"];

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
      console.log(`Unique items collected: ${currentSetSize}`);
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

  const applicationsButton = await printosPageObjects.applicationsButton;
  navigation.clickOnButton(applicationsButton)

});


Then('Fetch status of all orgs', async ({ page }) => {
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

      await page.pause()
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
      await printosPageObjects.overViewHeader.waitFor()
    }

  }
  console.log(`-------------------------------------------`);
  console.log(`Expired Set:`, Array.from(expiredSet || []));
  console.log(`Subscribed Set:`, Array.from(subscribedSet || []));
  console.log(`Available Set:`, Array.from(availableSet || []));
  console.log(`-------------------------------------------`);

});




Then('Fetch api details of Subscribed orgs', async ({ page }) => {
  let currentOrg;
  console.log("Subscribed list: ${subscribedList}")
  test.setTimeout(0);

    const acceptButton = await printosPageObjects.AcceptButton;
  try {
    await navigation.clickOnButton(page, acceptButton)
    await page.waitForTimeout(3000);

  } catch (e) {
    console.log("Accept button not found");
  }

  const orgDataStore = new Map();
  const activeAndWithInRemorse = new Map();
  const activeAndPostRemorse = new Map();
  const cancelledPostRemorse = new Map();
  const cancelledWithInRemorse = new Map();
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
        const applicationsButton = await printosPageObjects.applicationsButton;
        await navigation.clickOnButton(page, applicationsButton)

        const organizationMenu = await printosPageObjects.organizationMenu;
        await organizationMenu.nth(1).waitFor();
        await organizationMenu.nth(1).click();
        // navigation.clickOnButton(page, organizationMenu.nth(1))
        console.log(`Clicked on Organization Menu`);
      } catch (error) {

        const applicationsButton = await printosPageObjects.applicationsButton;
        await navigation.clickOnButton(page, applicationsButton)
        const organizationMenu = await printosPageObjects.organizationMenu;
        await organizationMenu.nth(1).waitFor();
        await organizationMenu.nth(1).click();
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


      // console.log(`Current org: ${currentOrg}`)
      // console.log(`State: ${responseBody.state}`)
      // console.log(`remorseEndDate: ${responseBody.attributes?.remorseEndDate}`)
      // console.log(`autoRenewal: ${responseBody.attributes?.autoRenewal}`)
      // console.log(`stateReason: ${responseBody.attributes?.stateReason}`)

       orgDataStore.set(currentOrg,  {
        state: responseBody.state,
        remorseEndDate: responseBody.attributes?.remorseEndDate ?? "N/A",
        autoRenewal: responseBody.attributes?.autoRenewal ?? "N/A",
        stateReason: responseBody.attributes?.stateReason ?? "N/A"
      });

          if ((responseBody.attributes?.stateReason == "subscriptionActivation")&&(responseBody.attributes?.remorseEndDate < today)) {
              activeAndPostRemorse.set(currentOrg, {remorseEndDate: responseBody.attributes?.remorseEndDate});
          } else if ((responseBody.attributes?.stateReason == "subscriptionActivation")&&(responseBody.attributes?.remorseEndDate > today)){
              activeAndWithInRemorse.set(currentOrg, {remorseEndDate: responseBody.attributes?.remorseEndDate});
          } else if (reason == "toggleAutoRenewal"){
              cancelledPostRemorse.set(currentOrg, {remorseEndDate: responseBody.attributes?.remorseEndDate})
          }  else if (responseBody.attributes?.stateReason == "cancelWithinRemorse"){
              cancelledWithInRemorse.set(currentOrg, {remorseEndDate:responseBody.attributes?.remorseEndDate})
          }

    } catch (error) {
      console.log(error)
      await page.goBack()
      // await printosPageObjects.overViewHeader.waitFor()
    }  }

      console.log(`----------Active and Post Remorse-------------`)
      activeAndPostRemorse.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});

      console.log(`----------Active and Within Remorse-------------`)
      activeAndWithInRemorse.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});

      console.log(`----------Cancelled Within Remorse-------------`)
      cancelledWithInRemorse.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});

      console.log(`----------Cancelled post Remorse-------------`)
      cancelledPostRemorse.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
      RemorseEndDate: ${values.remorseEndDate}`)});

      orgDataStore.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
       State: ${values.state}, 
       RemorseEndDate: ${values.remorseEndDate},
       AutoRenewal: ${values.autoRenewal}, 
       Reason: ${values.stateReason}`)});

        orgDataStore.forEach((values, currentOrg) => {
      console.log(`Org: ${currentOrg} ->
       State: ${values.state}, 
       RemorseEndDate: ${values.remorseEndDate},
       AutoRenewal: ${values.autoRenewal}, 
       Reason: ${values.stateReason}`)});


});