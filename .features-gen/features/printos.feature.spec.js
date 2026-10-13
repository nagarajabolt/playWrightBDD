// Generated from: features\printos.feature
import { test } from "playwright-bdd";

test.describe('PrintOS', () => {

  test.describe('Verify user is able to list all org names', () => {

    test('Example #1', { tag: ['@printosPrintOrgNames'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://stg.printopt.org/start/#/signin"', null, { page }); 
      await Then('Click on Sign In button', null, { page }); 
      await Then('Enter email address "carlossandevistan@yopmail.com"', null, { page }); 
      await Then('Click on Next button', null, { page }); 
      await Then('Click on use password', null, { page }); 
      await Then('Enter password "swqa!Quality123"', null, { page }); 
      await Then('Click on Second Sign In button', null, { page }); 
      await Then('Click on accept button', null, { page }); 
      await Then('Print all org names', null, { page }); 
    });

  });

  test.describe('Verify user is able to print org status', () => {

    test('Example #1', { tag: ['@printosPrintOrgStatus'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://stg.printopt.org/start/#/signin"', null, { page }); 
      await Then('Click on Sign In button', null, { page }); 
      await Then('Enter email address "carlossandevistan@yopmail.com"', null, { page }); 
      await Then('Click on Next button', null, { page }); 
      await Then('Click on use password', null, { page }); 
      await Then('Enter password "swqa!Quality123"', null, { page }); 
      await Then('Click on Second Sign In button', null, { page }); 
      await Then('Click on accept button', null, { page }); 
      await Then('Fetch status of all orgs', null, { page }); 
    });

  });

  test.describe('Verify user is able to print org api details', () => {

    test('Example #1', { tag: ['@printosPrintOrgApiDetails'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://stg.printopt.org/start/#/signin"', null, { page }); 
      await Then('Click on Sign In button', null, { page }); 
      await Then('Enter email address "carlossandevistan@yopmail.com"', null, { page }); 
      await Then('Click on Next button', null, { page }); 
      await Then('Click on use password', null, { page }); 
      await Then('Enter password "swqa!Quality123"', null, { page }); 
      await Then('Click on Second Sign In button', null, { page }); 
      await Then('Click on accept button', null, { page }); 
      await Then('Fetch api details of Subscribed orgs', null, { page }); 
    });

  });

  test.describe('Verify user is able to place order', () => {

    test('Example #1', { tag: ['@printosPlaceOrder'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://stg.printopt.org/start/#/signin"', null, { page }); 
      await Then('Click on Sign In button', null, { page }); 
      await Then('Enter email address "qa.printos.abc@mailsac.com"', null, { page }); 
      await Then('Click on Next button', null, { page }); 
      await Then('Click on use password', null, { page }); 
      await Then('Enter password "test123$"', null, { page }); 
      await Then('Click on Second Sign In button', null, { page }); 
      await Then('Click on accept button', null, { page }); 
      await Then('Select org "hpbwqa abc 12"', null, { page }); 
      await Then('Click on MarketPlace', null, { page }); 
      await Then('Check if status is Available for purchase', null, { page }); 
      await Then('Click on HP Professional Print Service Plans', null, { page }); 
      await Then('Click on Subscribe button', null, { page }); 
      await Then('Click on Proceed to Checkout', null, { page }); 
      await Then('Enter billing details', {"dataTable":{"rows":[{"cells":[{"value":"FirstName"},{"value":"LastName"},{"value":"AddressLine1"},{"value":"City"},{"value":"State"},{"value":"ZipCode"},{"value":"PhoneNumber"},{"value":"CompanyName"}]},{"cells":[{"value":"Tom"},{"value":"Cruise"},{"value":"151 KAPAHULU AVE"},{"value":"Honolulu"},{"value":"Hawaii"},{"value":"96815"},{"value":"857-245-7473"},{"value":"Apple Inc."}]}]}}, { page }); 
      await Then('Click on use this address', null, { page }); 
      await Then('Enter card details', {"dataTable":{"rows":[{"cells":[{"value":"CardNumber"},{"value":"ExpiryDate"},{"value":"CVV"}]},{"cells":[{"value":"4111111111111111"},{"value":"12/34"},{"value":"123"}]}]}}, { page }); 
      await Then('Click on use this card', null, { page }); 
      await Then('Select checkboxes in summary page', null, { page }); 
      await Then('Click on enroll In ProducationHubHWSuiteButton', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\printos.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":17,"tags":["@printosPrintOrgNames"],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://stg.printopt.org/start/#/signin\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://stg.printopt.org/start/#/signin\"","children":[{"start":13,"value":"https://stg.printopt.org/start/#/signin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Click on Sign In button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Enter email address \"carlossandevistan@yopmail.com\"","stepMatchArguments":[{"group":{"start":20,"value":"\"carlossandevistan@yopmail.com\"","children":[{"start":21,"value":"carlossandevistan@yopmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Click on Next button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Click on use password","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"swqa!Quality123\"","stepMatchArguments":[{"group":{"start":15,"value":"\"swqa!Quality123\"","children":[{"start":16,"value":"swqa!Quality123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Click on Second Sign In button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Click on accept button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Print all org names","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":34,"tags":["@printosPrintOrgStatus"],"steps":[{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://stg.printopt.org/start/#/signin\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://stg.printopt.org/start/#/signin\"","children":[{"start":13,"value":"https://stg.printopt.org/start/#/signin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Click on Sign In button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Enter email address \"carlossandevistan@yopmail.com\"","stepMatchArguments":[{"group":{"start":20,"value":"\"carlossandevistan@yopmail.com\"","children":[{"start":21,"value":"carlossandevistan@yopmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Click on Next button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Click on use password","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"swqa!Quality123\"","stepMatchArguments":[{"group":{"start":15,"value":"\"swqa!Quality123\"","children":[{"start":16,"value":"swqa!Quality123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Click on Second Sign In button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Click on accept button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Fetch status of all orgs","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":53,"tags":["@printosPrintOrgApiDetails"],"steps":[{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://stg.printopt.org/start/#/signin\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://stg.printopt.org/start/#/signin\"","children":[{"start":13,"value":"https://stg.printopt.org/start/#/signin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Click on Sign In button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then Enter email address \"carlossandevistan@yopmail.com\"","stepMatchArguments":[{"group":{"start":20,"value":"\"carlossandevistan@yopmail.com\"","children":[{"start":21,"value":"carlossandevistan@yopmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Click on Next button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then Click on use password","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"swqa!Quality123\"","stepMatchArguments":[{"group":{"start":15,"value":"\"swqa!Quality123\"","children":[{"start":16,"value":"swqa!Quality123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Click on Second Sign In button","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then Click on accept button","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then Fetch api details of Subscribed orgs","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":86,"tags":["@printosPlaceOrder"],"steps":[{"pwStepLine":57,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://stg.printopt.org/start/#/signin\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://stg.printopt.org/start/#/signin\"","children":[{"start":13,"value":"https://stg.printopt.org/start/#/signin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Click on Sign In button","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Enter email address \"qa.printos.abc@mailsac.com\"","stepMatchArguments":[{"group":{"start":20,"value":"\"qa.printos.abc@mailsac.com\"","children":[{"start":21,"value":"qa.printos.abc@mailsac.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Click on Next button","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then Click on use password","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"test123$\"","stepMatchArguments":[{"group":{"start":15,"value":"\"test123$\"","children":[{"start":16,"value":"test123$","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Click on Second Sign In button","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then Click on accept button","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then Select org \"hpbwqa abc 12\"","stepMatchArguments":[{"group":{"start":11,"value":"\"hpbwqa abc 12\"","children":[{"start":12,"value":"hpbwqa abc 12","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":66,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then Click on MarketPlace","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then Check if status is Available for purchase","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Click on HP Professional Print Service Plans","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then Click on Subscribe button","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Click on Proceed to Checkout","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Enter billing details","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Click on use this address","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then Enter card details","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then Click on use this card","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Select checkboxes in summary page","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then Click on enroll In ProducationHubHWSuiteButton","stepMatchArguments":[]}]},
]; // bdd-data-end