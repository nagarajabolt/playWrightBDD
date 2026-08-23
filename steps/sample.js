import { createBdd } from 'playwright-bdd';
const { Given, When, Then} = createBdd();
import { navigateToUrl, enterData } from '../utils/navigation.js';
import { Loginpage } from '../pageObjects/login.js';


Given('Navigate to properties url', async ({page}) => {
  await navigateToUrl(page, process.env.APP_URL);
});

Given('Navigate to {string}', async ({page}, arg) => {
  await navigateToUrl(page, arg);
});

Then('Close browser' , async ({page}) =>{
  if(page){
    await page.close();
  }
});

Then('Enter username {string}' , async ({page}, arg) =>{
    const login = await new Loginpage(page);    
    await enterData(page, login.username_textBox, arg)
    await console.log(`Entered username: ${arg}`)

});

Then('Enter password {string}' , async ({page}, arg) =>{
    const login = await new Loginpage(page);  
    await enterData(page, login.password_textBox , arg)
    await console.log(`Entered password: ${arg}`)

});

Then('Click on Login Button' , async ({page}) =>{
  const login = await new Loginpage(page);  
  await login.loginButton.click();
  await console.log(`Clicked on Login button`)

});