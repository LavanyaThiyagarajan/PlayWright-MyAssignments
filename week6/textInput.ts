
import { WebComponent } from "./webComponent.js";
import { Button } from "./button.js";

class TextInput extends WebComponent{
    value:string = ""

    enterText(text: string): void{
        this.value = text
        console.log("simulating text entry" + this.value)
    }
}

function testComponents():void{
    const button = new Button("buttonclass")
    const textInput = new TextInput("Lavanya")
    button.click()
    textInput.click()
    textInput.enterText("Lavanya")
    textInput.focus()
}

testComponents()