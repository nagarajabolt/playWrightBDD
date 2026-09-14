import { createBdd } from 'playwright-bdd';
const { Before, Given, When, Then } = createBdd();
import { expect } from '@playwright/test';
const test = require('@playwright/test');
import * as navigation from '../utils/navigation.js';
import { printos } from '../pageObjects/printos.js';


/** @type {printos} */
let printosPageObjects;
let sharedOrgNames = [];

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
    await acceptButton.waitFor({ state: 'visible', timeout: 30000 });
    await acceptButton.click();
    console.log(`Clicked on Accept button`);
    await page.waitForTimeout(3000);

  } catch (e) {
    console.log("Accept button not found");
  }
  const applicationsButton = await printosPageObjects.applicationsButton;
  await applicationsButton.waitFor({ state: 'visible', timeout: 80000 });
  await applicationsButton.click();
  console.log(`Clicked on My applications button`);
  await page.waitForTimeout(3000);

});

Then('Click on Organization Menu', async ({ page }) => {
  const organizationMenu = await printosPageObjects.organizationMenu;
  await organizationMenu.nth(1).waitFor({ state: 'visible', timeout: 80000 });
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
const cleanedOrgList = finalOrgList.map(item => item.replace(' Print Service Provider', '').trim());
 
// 3. Print out your final cleaned array
console.log(`\n🎉 Collection & Cleanup Complete! Total unique items: ${cleanedOrgList.length}`);
console.log(cleanedOrgList); 

});










//============================ 
//   const sharedOrgNames = new Set();
// const searchInput = page.locator("//input[@id='pros-app-switcher-options-search-input-input']"); 
 
// // 1. Click and focus inside the dropdown search bar to gain control
// await searchInput.click();
// await page.waitForTimeout(500);
 
// // 2. Clear out any previous selection by pressing ArrowDown once to focus the first item
// await page.keyboard.press('ArrowDown');
// await page.waitForTimeout(200);
 
// let noNewItemCount = 0;
// let lastCapturedText = "";
 
// console.log("Starting synchronized data collection...");
 
// // 3. Loop item-by-item
// while (noNewItemCount < 15) { // Stop if the focused text stays identical 15 times in a row
  
//   // 🎯 Target ONLY the single option row that is currently focused/active in the UI
//   // Look for the element with the active state class (e.g., .active, .selected, or [aria-selected='true'])
//   // If you don't know the class, we can target the element that currently holds browser focus:
//   const activeItemText = await page.evaluate(() => {
//     const activeEl = document.activeElement;
//     // Ensure we are reading an option row, otherwise fallback to finding the visual selection
//     if (activeEl && activeEl.id && activeEl.id.includes('pros-option-row-')) {
//       return activeEl.textContent;
//     }
//     // Fallback: Find the element with common focus attributes in virtual dropdowns
//     const highlighted = document.querySelector("div[id^='pros-option-row-'][aria-selected='true']") || 
//                       document.querySelector("div[id^='pros-option-row-'].active") ||
//                       document.querySelector("div[id^='pros-option-row-'].focused");
//     return highlighted ? highlighted.textContent : null;
//   });
 
//   if (activeItemText && activeItemText.trim()) {
//     const cleanedText = activeItemText.trim();
    
//     if (cleanedText !== lastCapturedText) {
//       sharedOrgNames.add(cleanedText);
//       lastCapturedText = cleanedText;
//       noNewItemCount = 0; // Reset counter since we found a new item
//       console.log(`Captured: ${cleanedText} | Total distinct items: ${sharedOrgNames.size}`);
//     } else {
//       noNewItemCount++;
//     }
//   } else {
//     // If we can't detect focus programmatically, fallback to reading the very first visible row element in the DOM
//     const fallbackText = await page.locator("div[id^='pros-option-row-']").first().textContent();
//     if (fallbackText && fallbackText.trim() !== lastCapturedText) {
//       sharedOrgNames.add(fallbackText.trim());
//       lastCapturedText = fallbackText.trim();
//       noNewItemCount = 0;
//     } else {
//       noNewItemCount++;
//     }
//   }
 
//   // 4. Move down strictly by 1 item
//   await page.keyboard.press('ArrowDown');
  
//   // ⏳ Give the virtual DOM exactly enough time (150ms) to unmount the old row and mount the new row
//   await page.waitForTimeout(150); 
// }
 
// // 5. Output the results
// const finalOrgList = Array.from(sharedOrgNames);
// console.log(`\n🎉 Collection Complete! Total items captured: ${finalOrgList.length}`);
// console.log(finalOrgList);
 


  // await printosPageObjects.organizationOptionSearchInput.fill('Hawaii');
  // await page.waitForTimeout(3000);
  // const scrollContainer = page.locator('//div[@class="pros-options-virtual-container"]');
  // scrollContainer.scrollTop = scrollContainer.scrollHeight;
  // const listBox =  page.locator("//div[@class='pros-option-list']")
  // const sharedOrgNames = new Set()
  // const scrollContainer = page.locator("//div[@id='pros-app-switcher-options']")

  // let previousSize = -1
  // let currentSize = 0
  // let stableAttempts = 0

  // while(previousSize !==  currentSize || breakCheckCounter < 3)
  // {
  //   if(previousSize === currentSize)
  //   {
  //     breakCheckCounter++;
  //   }
  //   else{
  //     breakCheckCounter = 0;
  //   }
  // }
  // previousSize = currentSize;

  // const visibleItems = await page.locator("div[id^='pros-option-row-']").allTextContents()
  // visibleItems.forEach(item => {
  //   if(item.trim()){
  //     sharedOrgNames.add(item.trim());
  //   }
  // });

  // previousSize = currentSize
  // currentSize = sharedOrgNames.size;
  // console.log("Current items ${currentSize}");

  // if(currentSize===previousSize){
  //   stableAttempts++;
  // }else{
  //   stableAttempts=0;
  // }

  // // await scrollContainer.evaluate(el => el.scrollTop += (el.clientHeight/2));

  // await page.keyboard.press('ArrowDown')
  // await page.waitForTimeout(800);

  // const finalOrgList = Array.from(sharedOrgNames);
  // console.log(finalOrgList); 



  // let previousHeight = 0
  // let currentHeight = await scrollContainer.evaluate(el => el.scrollHeight)
  // while(previousHeight != currentHeight){
  //   const visibleItems = await page.locator("div[id^='pros-option-row-']").allTextContents()
  //   visibleItems.forEach(item => sharedOrgNames.add(item.trim()))

  //   previousHeight = currentHeight
  //   await scrollContainer.evaluate(el => el.scrollTop += el.clientHeight)
  //   await page.waitForTimeout(400)

  //   currentHeight = await scrollContainer.evaluate(el => el.scrollHeight)
  // }

  // const finalOrgList = Array.from(sharedOrgNames)
  // let lastItemsCounts = finalOrgList.length

  // console.log(finalOrgList)
  // await page.locator("//div[@id='pros-app-switcher-options']").evaluate(el => el.scrollTop = 0);
  // await page.waitForTimeout(500);





  // for (let i = 0; i < 5; i++) {

  //   try {

      // const listBox = page.locator("//div[@id='pros-option-row-0']")
      // await listBox.focus();
      // await listBox.scrollIntoViewIfNeeded();  
      // await page.keyboard.press('PageUp');
      // await page.waitForTimeout(1000);
    //   console.log('pressed up button')
    // } catch (error) {
    //   console.log('unable to press up button')
    //   break;
    // }

  // }
  // let lastItemsCount = 0;
  // sharedOrgNames = [];
  // for (let i = 0; i < 250; i++) {
  //   try {
  //     const listBox = page.locator("//div[@id='pros-option-row-${i}']")
  //     await listBox.focus();
  //     sharedOrgNames.push(listBox.allTextContents)
  //     console.log("Item present{i}")
  //     lastItemsCount++;
  //   } catch {
  //     console.log("Item does not exist")
  //   }


  //   await page.keyboard.press('PageDown');
  //   await page.waitForTimeout(1000);
  //   console.log('pressed down button')
  // }

  // console.log(sharedOrgNames)

  // await page.waitForTimeout(3000);
  // const orgNames = await printosPageObjects.organizationListItems;
  // const lastItemsCount = await orgNames.count();

  let currentItemsCount = 0;

  // while(lastItemsCount > currentItemsCount) {
  //   const option = await page.locator(`//div[@class='pros-option-row=${lastItemsCount - 1}']`);
  //   await option.scrollIntoViewIfNeeded();   
  //   currentItemsCount = await orgNames.count(); 
  //   console.log(`Total number of organizations: ${currentItemsCount}`);
  // }
  // const option = 


  // const option = printosPageObjects.Alabama1Text
  // await option.scrollIntoViewIfNeeded();
  // while (!(await option.isVisible())) {
  // await page.mouse.wheel(0, -100);
  // await page.waitForTimeout(5000);

  // }


  // let previousCount = 0;
  // sharedOrgNames = []; // Clear the shared array before populating it

  // while(currentCount > previousCount) {

  //     previousCount = currentCount;
  //     const sharedOrgNames = await printosPageObjects.itemSelector.allTextContents();

  //     await printosPageObjects.organizationListBox.evaluat((el)=> el.scrollTop = el.scrollHeight);
  //     await page.waitForTimeout(2000); // Wait for new items to load
  //     currentCount = await printosPageObjects.itemSelector.count();

  // }
  // console.log(`Total number of organizations after scrolling: ${currentCount}`);
  // console.log("All texts", Array.from(sharedOrgNames));


  // for (let i = 0; i < lastItemsCount; i++) {
  //   const orgName = await orgNames.nth(i).textContent();
  //   console.log(`Organization ${i + 1}: ${orgName}`);
  //   sharedOrgNames.push(orgName);
  // }


//============================

// const sharedOrgNames = new Set();
// const searchInput = page.locator("//input[@id='pros-app-switcher-options-search-input-input']"); 
// // 1. Click and focus inside the dropdown search bar to gain control
// await searchInput.click();
// await page.waitForTimeout(500);
 
// let noNewItemCount = 0;
// let lastCapturedText = "";
 
// console.log("Starting synchronized data collection via visual highlights...");
 
// // 2. Loop down item by item
// while (noNewItemCount < 15) { // Exit if the visually highlighted text doesn't change for 15 steps
  
//   // 🎯 Extract the text of whichever row currently carries the visual active/selected state
//   const activeItemText = await page.evaluate(() => {
//     // Target any common listbox active highlight class names or attributes
//     const highlighted = document.querySelector("div[id^='pros-option-row-'][aria-selected='true']") ||
//                         document.querySelector("div[id^='pros-option-row-'][data-highlighted='true']") ||
//                         document.querySelector("div[id^='pros-option-row-'].active") ||
//                         document.querySelector("div[id^='pros-option-row-'].focused") ||
//                         document.querySelector("div[id^='pros-option-row-'].selected");
                        
//     return highlighted ? highlighted.textContent : null;
//   });
 
//   if (activeItemText && activeItemText.trim()) {
//     const cleanedText = activeItemText.trim();
    
//     if (cleanedText !== lastCapturedText) {
//       sharedOrgNames.add(cleanedText);
//       lastCapturedText = cleanedText;
//       noNewItemCount = 0; // Reset look-forward counter since a new row was logged
//       console.log(`Captured: ${cleanedText} | Total distinct items: ${sharedOrgNames.size}`);
//     } else {
//       noNewItemCount++;
//     }
//   } else {
//     // Fallback: If nothing is highlighted yet, extract the first option available in the list container DOM
//     const fallbackText = await page.locator("div[id^='pros-option-row-']").first().textContent().catch(() => null);
//     if (fallbackText && fallbackText.trim() !== lastCapturedText) {
//       sharedOrgNames.add(fallbackText.trim());
//       lastCapturedText = fallbackText.trim();
//       noNewItemCount = 0;
//     } else {
//       noNewItemCount++;
//     }
//   }
 
//   // 3. Command the keyboard to tap down to the next row option
//   await page.keyboard.press('ArrowDown');
  
//   // ⏳ Give the application 200ms to calculate state, swap rows, and render the new active item
//   await page.waitForTimeout(200);
// }
 
// // 4. Output complete result array
// const finalOrgList = Array.from(sharedOrgNames);
// console.log(`\n🎉 Collection Complete! Total unique items captured: ${finalOrgList.length}`);
// console.log(finalOrgList);