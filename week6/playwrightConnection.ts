import { DataBaseConnection } from "./dataBaseConnection.js";
class PlayWrightConnection implements DataBaseConnection{
    connect(): void {
        console.log("connection is established")
    }
    disconnect(): void {
       console.log("connection is disconnected")
    }
    executeUpdate(): void {
         console.log("Update statement is executed")
    }

}

const pwConnect = new PlayWrightConnection()
pwConnect.connect()
pwConnect.executeUpdate()
pwConnect.disconnect()