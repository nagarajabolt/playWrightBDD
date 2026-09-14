export const printos = class printos{

    constructor(page){
        this.page = page
        this.emailAddress = page.getByRole('textbox', { name: 'username' })
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.applicationsButton = page.locator('//*[@id="app-switcher-toggle"]')
        this.organizationMenu = page.locator('//div[@class="pros-input-container"]')
        this.organizationListBox = page.locator("#pros-app-switcher-options [role='listbox']")
        this.organizationListItems = page.locator("//div[@class='pros-option-row']")
        this.organizationOptionSearchInput = page.locator("//input[@id='pros-app-switcher-options-search-input-input']")
        this.searchOutputList = page.locator("//div[@class='pros-option-list']")
        this.ExpiredText = page.locator("//div[@class='title' and normalize-space()='HP Professional Print Service Plans'] /preceding-sibling::div[contains(@class,'status-container')] //div[@class='status']")
        this.Alabama1Text = page.locator("//div[@id='pros-option-row-0']")
        this.itemSelector = page.locator("//div[@class='pros-option-row selected']")
        // this.specificItem = page.locator()
        this.AcceptButton =page.locator("//button[@id='onetrust-accept-btn-handler']")
    }

}