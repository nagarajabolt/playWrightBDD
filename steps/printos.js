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
  "Minnesota 2",
  "Minnesota 3",
  "Minnesota 4",
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
    await acceptButton.waitFor();
    await acceptButton.click();
    console.log(`Clicked on Accept button`);
    await page.waitForTimeout(3000);

  } catch (e) {
    console.log("Accept button not found");
  }
  const applicationsButton = await printosPageObjects.applicationsButton;
  await applicationsButton.waitFor();
  await applicationsButton.click();
  console.log(`Clicked on My applications button`);
  await page.waitForTimeout(3000);

});

Then('Click on Organization Menu', async ({ page }) => {
  const organizationMenu = await printosPageObjects.organizationMenu;
  await organizationMenu.nth(1).waitFor();
  await organizationMenu.nth(1).click();
  console.log(`Clicked on Organization Menu`);
  //   await page.waitForLoadState('networkidle');
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
  await applicationsButton.waitFor();
  await applicationsButton.click();
});


Then('Fetch status of all orgs', async ({ page }) => {
  console.log(cleanedOrgList)
  test.setTimeout(0);

  let currentOrg;
  let expiredSet;
  let subscribedSet;
  let availableSet;

  for (let i = 0; i < cleanedOrgList.length; i++) {
    // await page.reload();
    // await printosPageObjects.printOSHeader.click();
    // await page.pause();
    currentOrg = cleanedOrgList[i]
    console.log(`Org No: ${i + 1} and Org Name:${currentOrg}`);

    try {
      try {
        const applicationsButton = await printosPageObjects.applicationsButton;
        await applicationsButton.waitFor();
        await applicationsButton.click();
        console.log(`Clicked on My applications button`);


        const organizationMenu = await printosPageObjects.organizationMenu;
        await organizationMenu.nth(1).waitFor();
        await organizationMenu.nth(1).click();
        console.log(`Clicked on Organization Menu`);
      } catch (error) {

        const applicationsButton = await printosPageObjects.applicationsButton;
        await applicationsButton.waitFor();
        await applicationsButton.click();
        console.log(`Clicked on My applications button`);
        const organizationMenu = await printosPageObjects.organizationMenu;
        await organizationMenu.nth(1).waitFor();
        await organizationMenu.nth(1).click();
        console.log(`Clicked on Organization Menu`);

      }

      // --- STEP 1: Search and Select the Organization ---
      const searchInput = page.locator("//input[@id='pros-app-switcher-options-search-input-input']");
      await searchInput.waitFor();
      await searchInput.click();
      await searchInput.fill(currentOrg);
      await page.waitForTimeout(300); // Small pause for the filter to update

      // Select the matched option row (matching the exact text)
      const matchedRow = page.locator(`div[id^='pros-option-row-']:has-text('${currentOrg}')`).first();
      await matchedRow.waitFor();
      await matchedRow.click();

      // Wait for the UI context to completely switch to the selected organization
      // await page.waitForTimeout(5000);
      // await page.waitForLoadState('domcontentloaded');
      await navigation.waitForPageLoad(page);
      await printosPageObjects.overViewHeader.waitFor();
      // --- STEP 2: Open Applications Menu & Navigate to Marketplace ---
      // Click the top-left applications switcher icon
      const applicationsButton = await printosPageObjects.applicationsButton;
      await applicationsButton.waitFor();
      await applicationsButton.click();
      console.log(`Clicked on My applications button`);

      // Click on "Marketplace" inside the menu
      const marketplaceOption = printosPageObjects.marketPlace
      await marketplaceOption.waitFor();
      await marketplaceOption.click();

      await navigation.waitForPageLoad(page);
      await printosPageObjects.status.waitFor()
      await navigation.waitForPageLoad(page);
      // await page.waitForTimeout(5000);
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




