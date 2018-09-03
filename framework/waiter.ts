import { element, browser, ExpectedConditions, ElementFinder } from 'protractor';
import { Locator } from 'selenium-webdriver';
import { config } from './config';

export async function waitForPresence(selector: Locator): Promise<void>
export async function waitForPresence(selector: ElementFinder): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(selector instanceof ElementFinder ? selector : element(selector)), config.displayTimeout);
}

export async function waitForVisibility(selector: Locator): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(element(selector)), config.displayTimeout);
}

export async function waitForInVisibility(selector: Locator): Promise<void> {
    await browser.wait(ExpectedConditions.invisibilityOf(element(selector)), config.displayTimeout);
}