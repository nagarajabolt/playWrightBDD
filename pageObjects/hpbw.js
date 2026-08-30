export const hpbw = class hpbw{

    constructor(page){
        this.page = page
        this.signInButton = page.locator('#pros-signin-button');
        this.emailAddress = page.locator('span', { hasText: /^Email address$/ });
        this.NextButton = page.getByText('Next', { exact: true })
        this.usePassword = page.getByText('Use password', { exact: true })
        this.password = page.locator('#password')
        this.secondSignInButton = page.locator('#sign-in')
    }

}