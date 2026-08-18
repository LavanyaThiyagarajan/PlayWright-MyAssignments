export class Browser{
    browserName: string;
    browserVersion: number;

    constructor(browserName:string, browserVersion:number){
        this.browserName = browserName
        this.browserVersion = browserVersion
    }

    openURL() : void{
        console.log("URL is Opened")
    }
    closeBrowser() : void{
        console.log("Browser is closed")
    }
    navigateBack() : void{
        console.log("URL is navigated back")
    }

}
