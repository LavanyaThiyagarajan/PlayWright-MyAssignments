
import {DataBaseConnection} from "./dataBaseConnection.js"
export abstract class MySqlConnection implements DataBaseConnection{

    abstract connect():void
    abstract disconnect():void
    abstract executeUpdate():void
    executeQuery():void{
        console.log("Query is executed")
    }

}