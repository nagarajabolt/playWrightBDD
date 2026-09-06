// Generated from: features\HPBW.feature
import { test } from "playwright-bdd";

test.describe('Open Google', () => {

  test.describe('Verify user is able to login to HPBW site', () => {

    test('Example #1', { tag: ['@hpbwlogin'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://stg.printopt.org/start/#/signin"', null, { page }); 
      await Then('Click on Sign In button', null, { page }); 
      await Then('Enter email address "carlossandevistan@yopmail.com"', null, { page }); 
      await Then('Click on use password', null, { page }); 
      await Then('Enter password "swqa!Quality123"', null, { page }); 
      await Then('Click on Next button', null, { page }); 
      await Then('Click on Second Sign In button', null, { page }); 
      await Then('Close browser', null, { page }); 
    });

  });

  test('Buy tokens', { tag: ['@BuyTokens'] }, async ({ Given, Then, page }) => { 
    await Given('Open chrome browser and Login to application', {"dataTable":{"rows":[{"cells":[{"value":"Url"},{"value":"Username"},{"value":"Password"}]},{"cells":[{"value":"https://aec-itg.hpcloud.hp.com/projects"},{"value":"nagaraj11@mailsac.com"},{"value":"Test123@"}]}]}}, { page }); 
    await Then('Click on Tokens button and print detail api details and validate api response', null, { page }); 
    await Then('Click on Get more tokens', null, { page }); 
    await Then('Click on 5 token package', null, { page }); 
    await Then('Click on Add to Cart', null, { page }); 
    await Then('Click on Proceed to Checkout', null, { page }); 
    await Then('Enter billing details', {"dataTable":{"rows":[{"cells":[{"value":"FirstName"},{"value":"LastName"},{"value":"AddressLine1"},{"value":"City"},{"value":"State"},{"value":"ZipCode"},{"value":"PhoneNumber"},{"value":"CompanyName"}]},{"cells":[{"value":"John"},{"value":"Doe"},{"value":"123 Main St"},{"value":"New York"},{"value":"Wyoming"},{"value":"10001"},{"value":"123-456-7890"},{"value":"Acme Inc."}]}]}}, { page }); 
    await Then('Click on use this address', null, { page }); 
    await Then('Enter card details', {"dataTable":{"rows":[{"cells":[{"value":"CardNumber"},{"value":"ExpiryDate"},{"value":"CVV"}]},{"cells":[{"value":"4111111111111111"},{"value":"12/34"},{"value":"123"}]}]}}, { page }); 
    await Then('Click on use this card', null, { page }); 
    await Then('Click on confirm and purchase', null, { page }); 
    await Then('Click on see orders and invoices', null, { page }); 
    await Then('Close browser', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\HPBW.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":16,"tags":["@hpbwlogin"],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://stg.printopt.org/start/#/signin\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://stg.printopt.org/start/#/signin\"","children":[{"start":13,"value":"https://stg.printopt.org/start/#/signin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Click on Sign In button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Enter email address \"carlossandevistan@yopmail.com\"","stepMatchArguments":[{"group":{"start":20,"value":"\"carlossandevistan@yopmail.com\"","children":[{"start":21,"value":"carlossandevistan@yopmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Click on use password","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"swqa!Quality123\"","stepMatchArguments":[{"group":{"start":15,"value":"\"swqa!Quality123\"","children":[{"start":16,"value":"swqa!Quality123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Click on Next button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Click on Second Sign In button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Close browser","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":19,"tags":["@BuyTokens"],"steps":[{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given Open chrome browser and Login to application","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Click on Tokens button and print detail api details and validate api response","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Click on Get more tokens","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Click on 5 token package","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Click on Add to Cart","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Click on Proceed to Checkout","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Enter billing details","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Click on use this address","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Enter card details","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Click on use this card","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Click on confirm and purchase","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Click on see orders and invoices","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Close browser","stepMatchArguments":[]}]},
]; // bdd-data-end