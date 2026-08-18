import { Browser } from "./browser.js"
class Safari extends Browser{
     readerMode() : void{
        console.log("Reader mode is On")
    }
    fullScreenMode() : void
    {
        console.log("Full Screen mode is On")
    }
}

 const safari = new Safari("Safari", 122)
 safari.openURL()
 safari.fullScreenMode()
 safari.readerMode()


