import { ElementFinder, element, by } from 'protractor';
import { waitForPresence } from '../../framework/waiter';
import { View } from '../../framework/view';

export class SignInView implements View {

    private email: ElementFinder;
    private password: ElementFinder;
    private signInButton: ElementFinder;

    async assertDisplayed(): Promise<SignInView> {
        await waitForPresence(by.css('.login'));

        return Promise.resolve(this);
    }

    async setEmail(email): Promise<SignInView> {
        if (this.email == null) {
            this.email = element(by.id('MainContent_login_UserName'));
        }

        await waitForPresence(this.email);

        this.email.sendKeys(email);

        return Promise.resolve(this);
    }

    async setPassword(password: string): Promise<SignInView> {
        if (this.password == null) {
            this.password = element(by.id('MainContent_login_txtPassword'));
        }

        await waitForPresence(this.password);

        this.password.sendKeys(password);

        return Promise.resolve(this);
    }

    async clickSignIn(): Promise<SignInView> {
        if (this.signInButton == null) {
            this.signInButton = element(by.id('MainContent_login_btnLogin'));
        }

        await waitForPresence(this.signInButton);

        await this.signInButton.click();

        return Promise.resolve(this);
    }
}