import { MySqlConnection } from "./mySqlConnection.js";

class PlayWrightConnect extends MySqlConnection{
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

const connect = new PlayWrightConnect()
connect.connect()
connect.executeQuery()
connect.executeUpdate()
connect.disconnect()