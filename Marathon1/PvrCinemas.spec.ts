import test, {expect, chromium} from "@playwright/test"

test("PVR Cinemas Booking", async()=>{
    const browser =  await chromium.launch({headless: false});
    const context =await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.pvrcinemas.com/");
    await page.locator("//h6[text()='Chennai']//preceding-sibling::div").click();
    await page.locator("//span[text()='Movie']").click();
    await page.locator("//span[text()='Select Movie']").click();
    await page.locator("//span[text()='SPIDERMAN BRAND NEW DAY']").click();
    await page.locator("//span[contains(text(), 'Today')]//parent::li").click();
    await page.locator("//span[contains(text(),'PVR Heritage')]").click();
    await page.locator("(//span[text()='12:30 PM'])[1]").click();
    await page.locator("//div[@class='quick-lefts ']//button//span").click();
    await page.locator("//button[text()='Accept']").click();
    await page.locator("(//span[@class='seat-current-pvr'])[1]").click();
    const seatDetails = await page.locator(".seat-info").innerText();
    console.log(seatDetails);
    const grandTotal = (await page.locator(".grand-prices").innerText()).replaceAll("\"", "").trim();
    console.log("GrandTotal: " +grandTotal);
    await page.locator("//div[@class='register-btn']//button").click();
    await page.waitForTimeout(3000);
    expect(page.locator("//h6[text()='Grand Total']//following::span")).toBeVisible();
    const finalTotal = await page.locator("//h6[text()='Grand Total']//following::span").innerText();
    console.log("Final Total: " +finalTotal);
    expect(finalTotal).toBe(grandTotal); //Javascript assertions
})