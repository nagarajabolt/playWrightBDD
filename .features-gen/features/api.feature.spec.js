// Generated from: features/api.feature
import { test } from "playwright-bdd";

test.describe('Sample API response', () => {

  test('Print whoami API response', { tag: ['@api'] }, async ({ Given, Then, page }) => { 
    await Given('Open sample API page "https://beeceptor.com/docs/sample-api-for-testing/"', null, { page }); 
    await Then('Print whoami API response', null, { page }); 
    await Then('Close browser', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/api.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@api"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Open sample API page \"https://beeceptor.com/docs/sample-api-for-testing/\"","stepMatchArguments":[{"group":{"start":21,"value":"\"https://beeceptor.com/docs/sample-api-for-testing/\"","children":[{"start":22,"value":"https://beeceptor.com/docs/sample-api-for-testing/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Print whoami API response","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Close browser","stepMatchArguments":[]}]},
]; // bdd-data-end