export const hpbw = class hpbw{

    constructor(page){
        this.page = page
        this.signInButton = page.locator('#pros-signin-button');
        this.loginButton = page.getByRole('button', { name: /log\s*in/i }).first();
        this.emailAddress = page.locator('span', { hasText: /^Email address$/ });
        this.NextButton = page.getByText('Next', { exact: true })
        this.usePassword = page.getByText('Use password', { exact: true })
        this.password = page.locator('#password')
        this.secondSignInButton = page.locator('#sign-in')
        this.signinButton = page.getByRole('button', { name: /sign\s*in/i }).first();
        this.tokensButton = page.locator('button, a, [role="button"], div').filter({ hasText: /\d+\s*Tokens?\b/i }).first();
        this.getMoreTokensButton = page.getByRole('button', { name: /get more tokens/i }).first();
        this.tokenPackageButton = page.locator('button, a, [role="button"], div').filter({ hasText: /^5\s*token(s)?\b/i }).first();
    }

}