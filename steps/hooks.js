const { createBdd } = require ('playwright-bdd')
const { Before, After } = createBdd();
const fs = require('fs');
const path = require('path');
const originalConsoleLog = console.log; // Print to terminal


Before(async ({ $testInfo }) => {
  // 1. Ensure the 'logs' folder exists at the project root
  const logDir = path.join(process.cwd(), 'logs');
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
 
  // 2. Clean up the feature name to make a safe filename
  const scenarioName = $testInfo.title.replace(/[^a-zA-Z0-9]/g, '_');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const logFilePath = path.join(logDir, `${scenarioName}_${timestamp}.txt`);
 
  // 3. Intercept console.log globally
//   const originalConsoleLog = console.log;
  console.log = function (...args) {
   
    const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' ');
    fs.appendFileSync(logFilePath, message + '\n'); // Save to file
  };
});

After(function() {
    console.log = originalConsoleLog;
})