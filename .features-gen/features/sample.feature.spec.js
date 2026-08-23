// Generated from: features/sample.feature
import { test } from "playwright-bdd";

test.describe('Open Google', () => {

  test.describe('Verify user is able to login to saucedemo', () => {

    test('Example #1', { tag: ['@Login'] }, async ({ Given, Then, page }) => { 
      await Given('Navigate to "https://www.saucedemo.com/"', null, { page }); 
      await Then('Enter username "standard_user"', null, { page }); 
      await Then('Enter password "secret_sauce"', null, { page }); 
      await Then('Click on Login Button', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/sample.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":23,"tags":["@Login"],"steps":[{"pwStepLine":9,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Enter username \"standard_user\"","stepMatchArguments":[{"group":{"start":15,"value":"\"standard_user\"","children":[{"start":16,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":15,"value":"\"secret_sauce\"","children":[{"start":16,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Click on Login Button","stepMatchArguments":[]}]},
]; // bdd-data-end