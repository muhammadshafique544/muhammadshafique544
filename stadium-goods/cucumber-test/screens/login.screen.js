

const Page = require('./screen');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeText(){
        return $('accessibility id:Welcome!')
    }
     get inputUsername () {
        
        return $('xpath://XCUIElementTypeApplication[@name="Appium"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField');
    }

    get inputPassword () {
        return $('xpath://XCUIElementTypeApplication[@name="Appium"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeSecureTextField');
    }

    get btnSubmit () {
        return $('accessibility id:LOGIN');
    }
     
    
    async veryfiyText(){
        await expect(this.welcomeText).toBeDisplayed()
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }
    async clickButton(){
        await this.btnSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
