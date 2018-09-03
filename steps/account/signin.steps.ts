import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { view } from "../../framework/factory";
import { SignInView } from "../../views/account/signInView";


When("User enters email {string} and password {string} on login screen", async (email: string, password: string) => {
    await view(SignInView)
        .then((signInView) => signInView.assertDisplayed())
        .then((signInView) => signInView.setEmail(email))
        .then((signInView) => signInView.clickNext())
        .then((signInView) => signInView.setPassword(password))
        .then((signInView) => signInView.clickSignIn());
});

Then("Error is displayed {string}", async (error: string) => {
    await view(SignInView)
        .then((signInView) => signInView.assertError(error));
});

Given("Open page {string}", async (url: string) => {
    await browser.get(url);
});
