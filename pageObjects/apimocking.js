export class ApiMockingPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page
      .locator('#pros-signin-button')
      .or(page.getByRole('button', { name: /^log\s*in$/i }))
      .first();
    this.emailAddress = page
      .getByRole('textbox', { name: /email/i })
      .or(page.locator('input[type="email"], input[autocomplete="username"], input[name*="email" i], input[placeholder*="email" i]'))
      .first();
    this.nextButton = page.getByRole('button', { name: /^next$/i }).or(page.getByText('Next', { exact: true })).first();
    this.usePassword = page.getByText('Use password', { exact: true });
    this.password = page.locator('#password, input[type="password"]').first();
    this.signinButton = page
      .locator('#sign-in')
      .or(page.getByRole('button', { name: /^sign\s*in$/i }))
      .first();
    this.tokensButton = page
      .getByRole('button', { name: /^\d+\s+Tokens$/i })
      .or(page.getByText(/^\d+\s+Tokens$/i))
      .first();
  }
}
