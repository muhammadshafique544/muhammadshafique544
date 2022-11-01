const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const { IosDriver } = require('appium-ios-driver') 
describe('Login with bank account', () => {
    // let url = new URL('http://127.0.0.1:4723/wd/hub')
    // let newDriver = new  IosDriver(url);
    // console.log('newDriver',newDriver);
    before(function(){
        console.log("BEFORE ALL TEST CASES")
    })
    after(function(){
        console.log("AFTER ALL TEST CASES")
    })
    beforeEach(function(){
        console.log("BEFORE EACH ALL TEST CASES")
    })
    afterEach(function(){
        console.log("AFTER EACH ALL TEST CASES")
    })

     it('should validate login credentials', async () => {
             
        await LoginPage.login('pom@mobven.com', 'Test321*');
        // await expect(SecurePage.accountLayout).toBeDisplayed();
    }); 

});


