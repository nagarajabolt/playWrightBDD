// Generated from: features\PrintOS.feature
import { test } from "playwright-bdd";

test.describe('PrintOS sign in and organization selection', () => {

  test('User signs in and selects the Hawaii 38 organization', async ({ Given, Then, page }) => { 
    await Given('Navigate to "https://stg.printopt.org/start/#/signin"', null, { page }); 
    await Then('Click on Sign In button', null, { page }); 
    await Then('Enter email address "carlossandevistan@yopmail.com"', null, { page }); 
    await Then('Click on Next button', null, { page }); 
    await Then('Click on use password', null, { page }); 
    await Then('Enter password "swqa!Quality123"', null, { page }); 
    await Then('Click on Second Sign In button', null, { page }); 
    await Then('Click on App Launcher menu', null, { page }); 
    await Then('Click on Organization', null, { page }); 
    await Then('Search for organization "Hawaii 38"', null, { page }); 
    await Then('Select organization "Hawaii 38"', null, { page }); 
    await Then('Close browser', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\PrintOS.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Navigate to \"https://stg.printopt.org/start/#/signin\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://stg.printopt.org/start/#/signin\"","children":[{"start":13,"value":"https://stg.printopt.org/start/#/signin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then Click on Sign In button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Enter email address \"carlossandevistan@yopmail.com\"","stepMatchArguments":[{"group":{"start":20,"value":"\"carlossandevistan@yopmail.com\"","children":[{"start":21,"value":"carlossandevistan@yopmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Click on Next button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Click on use password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Enter password \"swqa!Quality123\"","stepMatchArguments":[{"group":{"start":15,"value":"\"swqa!Quality123\"","children":[{"start":16,"value":"swqa!Quality123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Click on Second Sign In button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Click on App Launcher menu","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Click on Organization","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Search for organization \"Hawaii 38\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Hawaii 38\"","children":[{"start":25,"value":"Hawaii 38","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Select organization \"Hawaii 38\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Hawaii 38\"","children":[{"start":21,"value":"Hawaii 38","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Close browser","stepMatchArguments":[]}]},
]; // bdd-data-end