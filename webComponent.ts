
export class WebComponent{
    selector:string

    constructor(selector:string){
        this.selector = selector
    }

    click():void{
        console.log("simulating a click " +this.selector)
    }
    focus():void{
        console.log("simulating focusing on the component " +this.selector)
    }
}