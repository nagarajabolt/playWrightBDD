// export async function navigateToUrl(page, url) {
//     page.on('request', request => {
//         console.log(`>> Request: ${request.method()} ${request.url()}`);
//     });

// // Subscribe to incoming network responses
//     page.on('response', response => {
//         console.log(`<< Response: ${response.status()} ${response.url()}`);
//     });
//         console.log(`Navigate to: ${url}`);
//         await page.goto(url);
// }
//---------------------------------------
// export async function navigateToUrl(page, url) {
//     await page.route('**', async (route, request) => {
//     console.log(`URL: ${request.url()}`);
//     console.log(`Headers:`, await request.allHeaders());
  
//     // Continue the request normally without blocking it
//     await route.continue();
//     });
//         console.log(`Navigate to: ${url}`);
//         await page.goto(url);
// }

export async function navigateToUrl(page, url) {
    await page.route('**', async (route, request) => {
    console.log(`URL: ${request.url()}`);
    console.log(`Headers:`, await request.allHeaders());
    
const response = await route.fetch();
  
    // 2. Safely read the response body text or JSON
    let responseBody;
    try {
        responseBody = await response.json(); // Use response.text() if it is not JSON
        } catch (e) {
        responseBody = 'Could not parse response body';
    }

  // 3. Log your data to the console
    console.log(`URL: ${route.request().url()}`);
    console.log(`Status Code: ${response.status()}`);
    console.log(`Response Body:`, responseBody);

  // 4. Fullfill the route so the browser receives the data
    await route.fulfill({ response });
        });
        console.log(`Navigate to: ${url}`);
        await page.goto(url);
}


export async function enterData(page, object, data) {

    await object.fill(data);
    console.log(`Entered ${data} data in ${object}`)
}