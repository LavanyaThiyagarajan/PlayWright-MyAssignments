import test,{chromium} from "@playwright/test";

test("SalesForce Login", async() =>{
const browser = await chromium.launch({headless: false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://login.salesforce.com/");

await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
await page.locator("//input[@id='password']").fill("TestLeaf@2025");
await page.locator("//input[@value='Log In']").click();
await page.waitForTimeout(15000);
const pageTitle = await page.title();
console.log(pageTitle);
await browser.close();
})
