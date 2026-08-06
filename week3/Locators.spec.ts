import test, {expect} from "@playwright/test";

test("Create Lead", async({page})=>{
await page.goto("https://login.salesforce.com");
await page.getByRole("textbox", {name: "Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("textbox", {name: "Password"}).fill("TestLeaf@2025");
await page.getByRole("button", {name: "Log In"}).click();

await page.getByRole("button", {name: "App Launcher"}).click();
await page.locator("//button[text()='View All']").click();
await page.locator("//p[text()='Sales']").click();
await page.locator("(//span[text()='Leads']//following::a[@class='slds-button slds-button_reset'])[1]").click();
await page.locator("//span[text()='New Lead']//ancestor::a").click();
await page.locator("//button[@name='salutation']").click();
await page.locator("//button[@name='salutation']//following::div[@aria-label='Salutation']//lightning-base-combobox-item[@data-value='Mrs.']").click();
await page.getByRole("textbox", {name: "Last Name"}).fill("Thyagu");
await page.getByRole("textbox", {name: "Company"}).fill("TestLeaf");
await page.getByRole("button", {name: "Save", exact: true}).click();
expect(page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']")).toBeVisible();
})

test("Edit Lead", async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.getByRole("textbox", {name :"UserName"}).fill("democsr");//demosalesmanager
await page.getByLabel("Password").fill("crmsfa");
await page.getByRole("button").click();
await page.getByRole("link", {name : "CRM/SFA"}).click();
await page.getByRole("link", {name: "Create Lead", exact: true}).click();
await page.locator("#createLeadForm_companyName").fill("TestLeaf");
await page.locator("#createLeadForm_firstName").fill("Lavanya");
await page.locator("#createLeadForm_lastName").fill("T");
await page.locator("input.smallSubmit").click();
expect(page.locator("#sectionHeaderTitle_leads")).toBeVisible();
await page.locator("//a[text()='Edit']").click();
await page.locator("#updateLeadForm_companyName").clear();
await page.locator("#updateLeadForm_companyName").fill("Tata");
const companyNameValue = await page.locator("#updateLeadForm_companyName").getAttribute("value");
await page.getByRole("button", {name: "Update", exact: true}).click();
expect(await page.locator("#viewLead_companyName_sp").innerText()).toContain("Tata");
})

test("Create Individuals", async({page})=>{
await page.goto("https://login.salesforce.com");
await page.getByRole("textbox", {name: "Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("textbox", {name: "Password"}).fill("TestLeaf@2025");
await page.getByRole("button", {name: "Log In"}).click();
await page.getByRole("button", {name: "App Launcher"}).click();
await page.locator("//button[text()='View All']").click();
await page.locator("//p[text()='Individuals']//ancestor::a").click();
await page.locator("//span[text()='Individuals List']//ancestor::a").click();
await page.locator("//span[text()='New Individual']//ancestor::a").click();
await page.getByRole("textbox", {name :"Last Name *"}).fill("Thyagu");
await page.getByRole("button", {name: "Save", exact: true}).click();
const lastName = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText();
expect(lastName).toContain("Thyagu");
})

test("Edit Individuals", async({page})=>{
await page.goto("https://login.salesforce.com");
await page.getByRole("textbox", {name: "Username"}).fill("dilipkumar.rajendran@testleaf.com");
await page.getByRole("textbox", {name: "Password"}).fill("TestLeaf@2025");
await page.getByRole("button", {name: "Log In"}).click();
await page.getByRole("button", {name: "App Launcher"}).click();
await page.locator("//button[text()='View All']").click();
await page.locator("//p[text()='Individuals']//ancestor::a").click();
await page.locator("//span[text()='Individuals']//ancestor::a").click();
await page.locator("//input[@name='Individual-search-input']").fill("Thyagu");
await page.locator("//input[@name='Individual-search-input']").press("Enter");
//FAILING IN BELOW LINE
await page.locator("//li[@class='oneActionsDropDown']//a").click();
await page.locator("//div[@title='Edit']//parent::a").click();
await page.locator("//span[text()='Salutation']//following::a[1]").click();
await page.locator("//a[@title='Mr.']").click();
await page.getByRole("textbox", {name: "First Name"}).fill("Lavy");
await page.getByRole("button", {name: "Save", exact: true}).click();
const firstName = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText();
expect(firstName).toContain("Lavy");
})

