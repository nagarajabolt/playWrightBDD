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
]; // bdd-data-end