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
        this.AcceptButton = page.locator("//button[@id='onetrust-accept-btn-handler']")
        this.marketPlace = page.locator("//div[text()='Marketplace']")
        this.status = page.locator("//div[@class='status']")
        this.printServicePlanTab = page.locator("(//div[text()='HP Professional Print Service Plans'])[2]")
        this.printOSHeader = page.locator("//div[text()='PrintOS']")
        this.overViewHeader = page.locator("//h2[text()='Overview']")
        this.manageButton = page.locator("//span[text()='Manage']")
        this.ProductionHubHeader = page.locator("//h1[text()='Production Hub premium SW Suite dashboard']")
        this.continueWithoutUpgrading = page.locator("//button[text()='Continue without upgrading']")
    
    
    }

}