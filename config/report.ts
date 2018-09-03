import * as reporter from "cucumber-html-reporter";

const cucumberReporterOptions = {
    jsonFile: "reports/report.json",
    output: "reports/reporter.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};

export function generateReport() {
    reporter.generate(cucumberReporterOptions);
}
