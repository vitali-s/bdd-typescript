import { browser, element, ElementFinder, ExpectedConditions } from "protractor";
import { Locator } from "selenium-webdriver";
import { config } from "./config";

export async function waitForPresence(selector: Locator | ElementFinder): Promise<void> {
    const elementForPresence: ElementFinder = selector instanceof ElementFinder ? selector : element(selector);

    await browser.wait(ExpectedConditions.presenceOf(elementForPresence), config.displayTimeout);
}

export async function waitForVisibility(selector: Locator | ElementFinder): Promise<void> {
    const elementForVisibility: ElementFinder = selector instanceof ElementFinder ? selector : element(selector);

    await browser.wait(ExpectedConditions.visibilityOf(elementForVisibility), config.displayTimeout);
}

export async function waitForInVisibility(selector: Locator | ElementFinder): Promise<void> {
    const elementForInvisibility: ElementFinder = selector instanceof ElementFinder ? selector : element(selector);

    await browser.wait(ExpectedConditions.invisibilityOf(elementForInvisibility), config.displayTimeout);
}
