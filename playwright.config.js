// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.NODE_ENV || 'qa'; 
// 2. Load the specific properties file
dotenv.config({
  path: path.resolve(process.cwd(), `.env.${environment}`),
});

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.js',
});



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
        trace: 'on',
        headless: false,
        channel: 'chrome',
        screenshot: 'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  
  ],

});

