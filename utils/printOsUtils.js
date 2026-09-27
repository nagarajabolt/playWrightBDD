import * as navigation from '../utils/navigation.js';
import { printos } from '../pageObjects/printos.js';
import { test, Page, Locator } from '@playwright/test'; // Fixed require statement
 
export async function clickOnApplicationButton(page) {
    // Use the dynamic 'object' parameter passed into the function
    await navigation.clickOnButton(page, printosPageObjects.applicationsButton);
}