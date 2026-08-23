export const Loginpage = class loginPage{

    constructor(page){
        this.page = page
        this.username_textBox = page.locator('#user-name')
        this.password_textBox = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }

}