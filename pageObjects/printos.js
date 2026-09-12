export const printos = class printos{

    constructor(page){
        this.page = page
        this.emailAddress = page.getByRole('textbox', { name: 'username' })
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.applicationsButton = page.locator('//*[@id="app-switcher-toggle"]')
        this.organizationMenu = page.locator('//div[@class="pros-input-container"]')
        this.organizationListBox = page.locator("#pros-app-switcher-options [role='option']")
    }

}