// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

const timestamp = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-');

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
  // reporter: 'html',
  // Dynamically name folders for Cucumber logs and Playwright traces
  outputDir: `./test-results/run_${timestamp}`, 
  
  reporter: [
    ['html', { outputFolder: `./playwright-report/run_${timestamp}`, open: 'never' }]
    // ['cucumber-html-reporter', { output: `./cucumber-report/run_${timestamp}/report.html` }] // If using cucumber reporter
  ],


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
        trace: 'on',
        headless: false,
        channel: 'chrome',
        screenshot: 'on',
        launchOptions: {
          args: ['--start-maximized',
            '--window-size=1920,1080'],},
        viewport:  null,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        browserName: 'chromium',
        viewport: null
      }
    },
  
  ],

});

