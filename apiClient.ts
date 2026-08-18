
class ApiClient{

    sendRequest(endPoint:string):void
    sendRequest(endPoint:string, requestBody:string, requestStatus:boolean):void

    sendRequest(endPoint?:string, requestBody?:string, requestStatus?:boolean):void{
        console.log("Endpoint is : " +endPoint)
        if(requestBody && requestStatus != undefined){
            console.log("Request Body: " +requestBody)
            console.log("Status: " +requestStatus)
        }
    }
    demonstrate():void{
        this.sendRequest("https://w3schools.com", "playwright", true)
        this.sendRequest("https://amazon.com")
    }
}

const api = new ApiClient()
api.demonstrate()