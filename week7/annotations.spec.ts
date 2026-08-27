import {test,expect} from "@playwright/test"

test.use({storageState: "./data/sf-storage.json"})
test.only("Verify Salesforce HomePage - By pass login", async({page})=>{
await page.goto("https://orgfarm-77bb8f2224-dev-ed.develop.lightning.force.com/one/one.app")
expect(await page.title()).toContain("Lightning Experience")
})

test.use({storageState: "./data/sf-storage.json"})
test("Verify Salesforce HomePage using slow", async({page})=>{
test.slow()
await page.goto("https://orgfarm-77bb8f2224-dev-ed.develop.lightning.force.com/one/one.app")
expect(await page.title()).toContain("Lightning Experience")
})

test.use({storageState: "./data/sf-storage.json"})
test.fail("Verify Salesforce HomePage - To fail Intentionally", async({page})=>{
await page.goto("https://orgfarm-77bb8f2224-dev-ed.develop.lightning.force.com/one/one.app")
expect(await page.title()).toContain("Lightning Experience")
})

test("Verify LeafTap Login and Home Page", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`//input[@id='username']`).fill("demosalesmanager");
    await page.locator(`//input[@id='password']`).last().fill("crmsfa");
    await page.locator(`//input[@type="submit"]`).click()
    expect(await page.title()).toContain("TestLeaf")
})

test.fail("Invalid Login", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.locator(`//input[@id='username']`).fill("demosalesmanager");
    await page.locator(`//input[@id='password']`).last().fill("crmsfa");
    await page.locator(`//input[@type="submit"]`).click()
})

test.fixme("Incomplete flow", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`//input[@id='username']`).fill("demosales");
    await page.locator(`//input[@id='password']`).last().fill("crmsfa");
})

test.skip("Skip", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`//input[@id='username']`).fill("demosalesmanager");
    await page.locator(`//input[@id='password']`).last().fill("crmsfa");
    await page.locator(`//input[@type="submit"]`).click()
    await page.locator(`text=CRM/SFA`).click();
})