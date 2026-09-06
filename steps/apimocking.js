import { createBdd } from 'playwright-bdd';
import { ApiMockingPage } from '../pageObjects/apimocking.js';
const test = require('@playwright/test');
const { Before, Given, When, Then } = createBdd();

//** @type {ApiMockingPage} */
let apiMockingPage;
let detailApiResponse;

Before(async ({ page }) => {
  apiMockingPage = new ApiMockingPage(page);
  detailApiResponse = undefined;
});

Given('I navigate to the projects page', async ({ page }) => {
  // test.setTimeout(160000);
  await page.goto('https://aec-itg.hpcloud.hp.com/projects', { waitUntil: 'domcontentloaded' });
});

When('I click the Login button on the projects page', async () => {

  await apiMockingPage.loginButton.click();
});

When('I enter the API mocking email address {string}', async ({ page }, email) => {
  // await page.waitForLoadState('networkidle');
  // await apiMockingPage.emailAddress.waitFor({state: 'visible', timeout: 60000});
  await apiMockingPage.emailAddress.fill(email);
  await apiMockingPage.emailAddress.fill(email);
  await page.waitForTimeout(300);
});

When('I click the API mocking Next button', async () => {
  await apiMockingPage.nextButton.click();
});

When('I choose use password for API mocking', async () => {
  await apiMockingPage.usePassword.click();
});

When('I enter the API mocking password {string}', async ({ page }, password) => {
  await apiMockingPage.password.fill(password);
  await page.waitForTimeout(300);
});

When('I click the API mocking Signin button', async () => {
  await apiMockingPage.signinButton.click();
});

When('I click the dynamically numbered Tokens button', async ({ page }) => {
  const detailResponsePromise = page.waitForResponse(
    (response) => response.url().toLowerCase().includes('detail'),
    { timeout: 30_000 },
  );

  await apiMockingPage.tokensButton.click();
  detailApiResponse = await detailResponsePromise;
});

Then('I print the detail API request and response', async () => {
  if (!detailApiResponse) {
    throw new Error('The detail API response was not captured.');
  }

  const request = detailApiResponse.request();
  const responseBody = await detailApiResponse.text();

  console.log('detail API request headers:', await request.allHeaders());
  console.log('detail API request body:', request.postData() ?? '');
  console.log('detail API response details:', {
    url: detailApiResponse.url(),
    status: detailApiResponse.status(),
    statusText: detailApiResponse.statusText(),
    headers: await detailApiResponse.allHeaders(),
    body: responseBody,
  });
});
