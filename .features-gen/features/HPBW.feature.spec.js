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
    await Given('Open chrome browser and navigate to "https://aec-itg.hpcloud.hp.com/projects"', null, { page }); 
    await Then('Click on Login button', null, { page }); 
    await Then('Enter email address "nagaraj11@mailsac.com"', null, { page }); 
    await Then('Click on Next button', null, { page }); 
    await Then('Click on use password', null, { page }); 
    await Then('Enter password "Test123@"', null, { page }); 
    await Then('Click on Signin button', null, { page }); 
    await Then('Click on Tokens button and validate api response', null, { page }); 
    await Then('Click on Get more tokens', null, { page }); 
    await Then('Click on 5 token package', null, { page }); 
    await Then('Click on Add to Cart', null, { page }); 
    await Then('Click on Proceed to Checkout', null, { page }); 
    await Then('Enter First name "John"', null, { page }); 
    await Then('Enter Last name "Doe"', null, { page }); 
    await Then('Enter Address line1 "123 Main St"', null, { page }); 
    await Then('Enter city "New York"', null, { page }); 
    await Then('Select state "Wyoming"', null, { page }); 
    await Then('Enter zip code "10001"', null, { page }); 
    await Then('Enter phone number "123-456-7890"', null, { page }); 
    await Then('Enter company name "Acme Inc."', null, { page }); 
    await Then('Click on use this address', null, { page }); 
    await Then('Enter card number "4111111111111111"', null, { page }); 
    await Then('Enter expiry date "12/34"', null, { page }); 
    await Then('Enter cvv "123"', null, { page }); 
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
  {"pwTestLine":21,"pickleLine":19,"tags":["@BuyTokens"],"steps":[{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given Open chrome browser and navigate to \"https://aec-itg.hpcloud.hp.com/projects\"","stepMatchArguments":[{"group":{"start":36,"value":"\"https://aec-itg.hpcloud.hp.com/projects\"","children":[{"start":37,"value":"https://aec-itg.hpcloud.hp.com/projects","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Click on Login button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Enter email address \"nagaraj11@mailsac.com\"","stepMatchArguments":[{"group":{"start":20,"value":"\"nagaraj11@mailsac.com\"","children":[{"start":21,"value":"nagaraj11@mailsac.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Click on Next button","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Click on use password","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"Test123@\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Test123@\"","children":[{"start":16,"value":"Test123@","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Click on Signin button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Click on Tokens button and validate api response","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Click on Get more tokens","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Click on 5 token package","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Click on Add to Cart","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Click on Proceed to Checkout","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Enter First name \"John\"","stepMatchArguments":[{"group":{"start":17,"value":"\"John\"","children":[{"start":18,"value":"John","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Enter Last name \"Doe\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Doe\"","children":[{"start":17,"value":"Doe","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Enter Address line1 \"123 Main St\"","stepMatchArguments":[{"group":{"start":20,"value":"\"123 Main St\"","children":[{"start":21,"value":"123 Main St","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Enter city \"New York\"","stepMatchArguments":[{"group":{"start":11,"value":"\"New York\"","children":[{"start":12,"value":"New York","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Select state \"Wyoming\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Wyoming\"","children":[{"start":14,"value":"Wyoming","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Enter zip code \"10001\"","stepMatchArguments":[{"group":{"start":15,"value":"\"10001\"","children":[{"start":16,"value":"10001","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Enter phone number \"123-456-7890\"","stepMatchArguments":[{"group":{"start":19,"value":"\"123-456-7890\"","children":[{"start":20,"value":"123-456-7890","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Enter company name \"Acme Inc.\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Acme Inc.\"","children":[{"start":20,"value":"Acme Inc.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Click on use this address","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then Enter card number \"4111111111111111\"","stepMatchArguments":[{"group":{"start":18,"value":"\"4111111111111111\"","children":[{"start":19,"value":"4111111111111111","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Enter expiry date \"12/34\"","stepMatchArguments":[{"group":{"start":18,"value":"\"12/34\"","children":[{"start":19,"value":"12/34","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then Enter cvv \"123\"","stepMatchArguments":[{"group":{"start":10,"value":"\"123\"","children":[{"start":11,"value":"123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Click on use this card","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Click on confirm and purchase","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then Click on see orders and invoices","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then Close browser","stepMatchArguments":[]}]},
]; // bdd-data-end