import { TestData } from "./testData.js";

class LoginTestData extends TestData{

    enterUserName():void{
        console.log("user name is entered")
    }

    enterPassword(): void{
        console.log("password is entered")
    }
}

 const login = new LoginTestData()

 login.enterCredentials()
 login.enterUserName()
 login.enterPassword()
 login.navigateToHomePage()
 