// Generated from: features\sample.feature
import { test } from "playwright-bdd";

test.describe('Open Google', () => {

  test.describe('Verify user is able to open Google', () => {

    test('Example #1', { tag: ['@Openweb'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://www.google.com"', null, { page }); 
      await Then('Close browser', null, { page }); 
    });

    test('Example #2', { tag: ['@Openweb'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://www.gmail.com"', null, { page }); 
      await Then('Close browser', null, { page }); 
    });

  });

  test.describe('Verify user is able to login to saucedemo', () => {

    test('Example #1', { tag: ['@Login'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://www.saucedemo.com/"', null, { page }); 
      await Then('Enter username "standard_user"', null, { page }); 
      await Then('Enter password "secret_sauce"', null, { page }); 
      await Then('Validate header text is: "Swag Labs"', null, { page }); 
      await Then('Click on Login Button', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\sample.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":10,"tags":["@Openweb"],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://www.google.com\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.google.com\"","children":[{"start":13,"value":"https://www.google.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Close browser","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":11,"tags":["@Openweb"],"steps":[{"pwStepLine":14,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://www.gmail.com\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.gmail.com\"","children":[{"start":13,"value":"https://www.gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Close browser","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":24,"tags":["@Login"],"steps":[{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Enter username \"standard_user\"","stepMatchArguments":[{"group":{"start":15,"value":"\"standard_user\"","children":[{"start":16,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":15,"value":"\"secret_sauce\"","children":[{"start":16,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Validate header text is: \"Swag Labs\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Swag Labs\"","children":[{"start":26,"value":"Swag Labs","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Click on Login Button","stepMatchArguments":[]}]},
]; // bdd-data-end