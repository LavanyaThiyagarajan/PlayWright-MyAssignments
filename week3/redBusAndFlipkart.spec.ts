import test, {expect, firefox, chromium} from "@playwright/test";

test("Launch RedBus", async()=>{
    const browser = await firefox.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.redbus.in/");
     expect(await page.title()).toBe("Bus Booking Online and Train Tickets at Lowest Price - redBus")
     expect(page.url()).toBe("https://www.redbus.in/");
})

test("Launch Flipkart", async()=>{
    const browser = await chromium.launch({headless:false, channel: "msedge"});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.flipkart.com");
    const title = await page.title();
    expect(title).toContain("Online Shopping Site")
    const url = page.url();
    expect(url).toBe("https://www.flipkart.com/");
})
