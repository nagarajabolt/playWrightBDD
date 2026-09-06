// Generated from: features\apimocking.feature
import { test } from "playwright-bdd";

test.describe('Capture detail API traffic', () => {

  test('Login and capture the detail API response', { tag: ['@apimocking'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to the projects page', null, { page }); 
    await When('I click the Login button on the projects page'); 
    await And('I enter the API mocking email address "nagaraj11@mailsac.com"', null, { page }); 
    await And('I click the API mocking Next button'); 
    await And('I choose use password for API mocking'); 
    await And('I enter the API mocking password "Test123@"', null, { page }); 
    await And('I click the API mocking Signin button'); 
    await And('I click the dynamically numbered Tokens button', null, { page }); 
    await Then('I print the detail API request and response'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\apimocking.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@apimocking"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to the projects page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I click the Login button on the projects page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I enter the API mocking email address \"nagaraj11@mailsac.com\"","stepMatchArguments":[{"group":{"start":38,"value":"\"nagaraj11@mailsac.com\"","children":[{"start":39,"value":"nagaraj11@mailsac.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I click the API mocking Next button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I choose use password for API mocking","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I enter the API mocking password \"Test123@\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Test123@\"","children":[{"start":34,"value":"Test123@","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click the API mocking Signin button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click the dynamically numbered Tokens button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I print the detail API request and response","stepMatchArguments":[]}]},
]; // bdd-data-end