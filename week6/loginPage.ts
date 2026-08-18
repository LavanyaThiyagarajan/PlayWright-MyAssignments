
import { BasePage } from "./basePage.js";
class LoginPage extends BasePage{
    performCommonTasks(): void {
        console.log("Performed Login Page Tasks")
    }
}


const login = new LoginPage()
login.findElement()
login.clickElement()
login.enterText()
login.performCommonTasks()

const base = new BasePage()
base.performCommonTasks()
