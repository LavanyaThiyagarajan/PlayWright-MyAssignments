import test from "@playwright/test"

test("LearnStorage", async({page})=>{
await page.goto("https://login.salesforce.com/");

await page.locator("#username").fill("lava.lavanya1991.96fea07ce9e0@agentforce.com");
await page.locator("#Login").click();
await page.locator("//input[@id='password']").fill("Salesforce@123");
await page.locator("//input[@value='Log In']").click();
await page.waitForTimeout(20000);//to enter otp manually
console.log(await page.title())

await page.context().storageState({path: "./data/sf-storage.json"})
})