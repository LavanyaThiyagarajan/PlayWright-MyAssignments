import { Browser } from "./browser.js"
class Edge extends Browser{
     takeSnap() : void{
        console.log("Snap is taken")
    }
    clearCookies() : void{
        console.log("Cookies are cleared")
    }
}

const edge = new Edge("Edge", 121)
edge.openURL()
edge.takeSnap()
edge.clearCookies()