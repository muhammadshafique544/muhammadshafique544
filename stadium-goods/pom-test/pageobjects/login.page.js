const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('xpath://XCUIElementTypeApplication[@name="Appium"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField');
    }

    get inputPassword () {
        return $('xpath://XCUIElementTypeApplication[@name="Appium"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeSecureTextField');
    }

    get btnSubmit () {
        return $('accessibility id:LOGIN');
    }

    async login (username, password) {
        await this.inputUsername.waitForDisplayed({ timeout: 15000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        // await browser.pause(3000);
    }

}

module.exports = new LoginPage();
