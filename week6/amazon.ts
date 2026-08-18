import {CanaraBank} from "./canaraBank.js"
export class Amazon extends CanaraBank{
    cashOnDelivery(): void {
        console.log("CashOnDelivery")
    }
    upiPayments(): void {
        console.log("UpiPayments")
    }
    cardPayments(): void {
        console.log("CardPayments")
    }
    internetBanking(): void {
       console.log("Internet Banking")
    }
}

const amazon = new Amazon()
amazon.recordPaymentDetails()
amazon.cardPayments()
amazon.cashOnDelivery()
amazon.internetBanking()
amazon.upiPayments()