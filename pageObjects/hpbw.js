export const hpbw = class hpbw{

    constructor(page){
        this.page = page
        this.signInButton = page.locator('#pros-signin-button');
        this.emailAddress = page.locator('span', { hasText: /^Email address$/ });
        this.NextButton = page.getByText('Next', { exact: true })
        this.usePassword = page.getByText('Use password', { exact: true })
        this.password = page.locator('#password')
        this.secondSignInButton = page.locator('#sign-in')
        this.appLauncher = page.getByRole('button', { name: /app launcher/i }).first();
        this.organizationMenuItem = page.getByRole('menuitem', { name: /organization/i }).first();
        this.searchInput = page.locator('input[placeholder*="Search"], input[aria-label*="Search"], input[role="searchbox"]').first();
        this.organizationResult = page.getByRole('option', { name: /Hawaii 38/i }).first();
    }

}