let browserName = "chrome";
let testType = "regression";

launchBrowser(browserName);
runTests(testType);

function launchBrowser(browserName) {
if (browserName === "chrome") {
    console.log("Chrome browser");
} else {
    console.log("Edge browser");
}}

function runTests(testType) {
    switch(testType) {
        case "sanity":
            console.log("Sanity test");
            break;
        case "regression":
            console.log("Regression test");
            break;
        case "smoke":
        default:
            console.log("smoke test");
            break;
    }
}