import { createBdd } from 'playwright-bdd';
import { navigateToUrl } from '../utils/navigation.js';

const { Given, Then } = createBdd();
const whoamiResponses = new WeakMap();

Given('Open sample API page {string}', async ({ page }, url) => {
  const responsePromise = page.waitForResponse(
    response => /whoami/i.test(response.url()),
    { timeout: 30000 },
  );

  await Promise.all([
    navigateToUrl(page, url),
    responsePromise,
  ]);

  const response = await responsePromise;
  whoamiResponses.set(page, await response.text());
});

Then('Print whoami API response', async ({ page }) => {
  const response = whoamiResponses.get(page);

  if (response === undefined) {
    throw new Error('The whoami API response was not captured.');
  }

  console.log(`whoami API response: ${response}`);
});
