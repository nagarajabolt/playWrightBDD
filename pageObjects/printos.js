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
        this.hpProfessionalPrintServicePlans = page.locator("//div[@class='title' and normalize-space()='HP Professional Print Service Plans']").first()
        // this.subscribeButton = page.locator("//span[text()='Subscribe']/../..")
        this.subscribeButton = page.locator("(//div[@class='pros-button-component']/button)[2]")
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
    
        // this.summaryCheckbox1 = page.locator("//div[@class='styles__CheckboxContainer-monetization-checkout__sc-11kidd-10 feftbm']/label[1]/input")
        // this.summaryCheckbox2 = page.locator("//div[@class='styles__CheckboxContainer-monetization-checkout__sc-11kidd-10 feftbm']/label[2]/input")        
    
        this.summaryCheckbox1 = page.locator("//label[@class='label-regular css-vowb3d']//span[@class='vn-checkbox__span css-1xval8z']")
        this.summaryCheckbox2 = page.locator("//label[@class='caption-regular css-vowb3d']//span[@class='vn-checkbox__span css-1xval8z']")       



        this.enrollInProducationHubHWSuiteButton = page.locator("//span[text()='Enroll in Production Hub SW Suite']")
    }

}