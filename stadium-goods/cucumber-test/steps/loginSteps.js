const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../screens/login.screen');


Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.veryfiyText()
});

When(/^I login with (\w+) and (.+)$/, async (username,password) => {
    await LoginPage.login('cucumber@mobven.com', 'Pass321*')
});

Then(/^It should click the button$/, async () => {
        await LoginPage.clickButton()
});

