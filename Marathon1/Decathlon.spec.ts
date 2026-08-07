import test, {expect, chromium} from "@playwright/test";

test("Decathlon Test Case", async()=>{
const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.decathlon.in/");
await page.getByPlaceholder("Search for 60+ sports and 6,000+ products").fill("Shoes");
await page.getByPlaceholder("Search for 60+ sports and 6,000+ products").press("Enter");
await page.locator("//span[text()='Gender']").click();
await page.locator("//input[@data-test-id='filter-checkbox-gender_id_en-MEN']").click();
await page.locator("//span[text()='Size']").click();
await page.locator("//input[@data-test-id='filter-checkbox-indian_size-UK 11 - EU 46']").click();
await page.locator("//span[text()='Most relevant']").click();
await page.locator("//span[text()='Highest discount ']").click();
const productName = await page.locator("(//div[@class='overflow-hidden bg-white transition-shadow']//a//div[@data-test-id='product-card:product-card:title'])[1]").innerText();
await page.locator("(//div[@class='overflow-hidden bg-white transition-shadow']//a)[1]").click();
await page.locator("//span[text()='UK 10.5 - EU 45']").click();
await page.locator("//span[@data-test-id='button-children']").click();
await page.locator("//a[@data-test-id='header-desktop:cart-link']").click();
const actualProductName = await page.locator("//span[@data-test-id='text:cart-product-name']").innerText();
console.log("Product Name is: "+ productName);
const price = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']").innerText();
console.log("Price: " +price);
expect(actualProductName).toBe(actualProductName)
})