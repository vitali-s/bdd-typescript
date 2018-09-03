import { browser, Config } from "protractor";
import { generateReport } from "./report";

export const config: Config = {
    // If using async/await, disable control flow
    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://www.syncplicity.com",

    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--headless",
                "--disable-gpu",
            ],
        },
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./report.json",
        require: ["../../build/steps/**/*.js", "../../build/views/**/*.js"],
        strict: true,
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    onComplete: () => {
        generateReport();
    },

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    },

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    specs: [
        "../../features/**/*.feature",
    ],
};
