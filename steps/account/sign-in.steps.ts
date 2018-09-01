import { browser, ExpectedConditions, by, element } from "protractor";
import { Given, When } from 'cucumber';

When("User enters email {string}", async (email: string) => {
    const emailInput = await element(by.id('MainContent_login_UserName'));

    await browser.wait(ExpectedConditions.presenceOf(emailInput), 5000);

    await emailInput.sendKeys(email);
});

Given("Open page {string}", async (url: string) => {
    await browser.get(url);
});