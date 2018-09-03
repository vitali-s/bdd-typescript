import { Given, When } from "cucumber";
import { browser } from "protractor";
import { view } from "../../framework/factory";
import { SignInView } from "../../views/account/signInView";

When("User enters email {string} on login screen", async (email: string) => {
    await view(SignInView)
        .assertDisplayed()
        .then((view) => view.setEmail(email))
        .then((view) => view.setPassword("X"))
        .then((view) => view.clickSignIn());
});

Given("Open page {string}", async (url: string) => {
    await browser.get(url);
});
