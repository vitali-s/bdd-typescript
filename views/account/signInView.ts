import { expect } from "chai";
import { browser, by, element, ElementFinder } from "protractor";
import { View } from "../../framework/view";
import { waitForPresence, waitForVisibility } from "../../framework/waiter";

export class SignInView implements View {
    private loginContainer = element(by.css(".login"));
    private email = element(by.css("#MainContent_login_UserName"));
    private password = element(by.css("#MainContent_login_txtPassword"));
    private signInButton = element(by.css("#MainContent_login_btnLogin"));
    private nextButton = element(by.css("#MainContent_login_btnNext"));
    private error = element(by.css("#SystemMessageContent_statusMessage"));
    private errorMessage = element(by.css("#SystemMessageContent_statusMessage li"));

    public async assertDisplayed(): Promise<SignInView> {
        await waitForPresence(this.loginContainer);

        return Promise.resolve(this);
    }

    public async setEmail(email): Promise<SignInView> {
        await waitForPresence(this.email);
        await this.email.sendKeys(email);

        return Promise.resolve(this);
    }

    public async setPassword(password: string): Promise<SignInView> {
        await waitForPresence(this.password);
        await this.password.sendKeys(password);

        return Promise.resolve(this);
    }

    public async clickSignIn(): Promise<SignInView> {
        await waitForVisibility(this.signInButton);
        await this.signInButton.click();

        return Promise.resolve(this);
    }

    public async clickNext(): Promise<SignInView> {
        const isDisplayed = await this.nextButton.isDisplayed();

        // click next only if next button is displayed
        if (isDisplayed) {
            await this.nextButton.click();
        }

        return Promise.resolve(this);
    }

    public async assertError(expectedMessage: string): Promise<SignInView> {
        await waitForVisibility(this.error);

        const errorMessage = await this.errorMessage.getText();

        expect(errorMessage).to.equal(expectedMessage);

        return Promise.resolve(this);
    }
}
