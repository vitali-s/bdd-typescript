import * as reporter from "cucumber-html-reporter";

const cucumberReporterOptions = {
    jsonFile: "report.json",
    output: "report.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};

export function generateReport() {
    reporter.generate(cucumberReporterOptions);
}
