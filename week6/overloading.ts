
class Overloading{
    reportStep(message:string, status:string):void
    reportStep(message:string, status:string, isSnapTaken:boolean):void

    reportStep(message?:string, status?:string, isSnapTaken?:boolean){
        
        console.log("message: " +message)
        console.log("status: " +status)
        if(isSnapTaken!= undefined){
            console.log("Is Snap Taken: " +isSnapTaken)
        }
    }

    demonstrate():void{
        this.reportStep("Html Report", "Passed")
        this.reportStep("Html Report", "Failed", true)
    }
}

const overload = new Overloading()
overload.demonstrate()