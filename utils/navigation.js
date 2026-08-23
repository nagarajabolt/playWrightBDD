export async function navigateToUrl(page, url) {

    console.log(`Navigate to: ${url}`);
    await page.goto(url);
}

export async function enterData(page, object, data) {

    await object.fill(data);
    console.log(`Entered ${data} data in ${object}`)
}