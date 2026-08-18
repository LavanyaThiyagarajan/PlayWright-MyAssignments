
import { Browser } from "./browser.js"
class Chrome extends Browser{
    openCognito() : void{
        console.log("Cognito is opened")
    }
    clearCache() : void{
        console.log("Cache is cleared")
    }
}

const chrome = new Chrome("Chrome", 120)
chrome.openURL()
chrome.navigateBack()
chrome.closeBrowser()
chrome.openCognito()
chrome.clearCache()
