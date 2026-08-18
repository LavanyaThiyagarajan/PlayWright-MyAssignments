
import { Payments } from "./payments.js";
export abstract class CanaraBank implements Payments{
    abstract cashOnDelivery():void
    abstract upiPayments():void
    abstract cardPayments():void
    abstract internetBanking():void
    
    recordPaymentDetails():void{
        console.log("Record Payment Details")
    }
}