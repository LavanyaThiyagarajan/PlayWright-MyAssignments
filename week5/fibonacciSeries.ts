function fibonnacci(input : number): number{
    if(input<0){
        console.log("It is negative number")
        return 0;
    }
    if(input===0)
        return 0

    if(input===1)
        return 1

    let result = 0
    let firstNumber =0
    let secondNumber = 1
       
     for(let i =1; i<input; i++){
            result = firstNumber+secondNumber //0 1 1 1
            firstNumber = secondNumber//1 1
            secondNumber = result //1 2
        }
    return result
}

console.log(fibonnacci(10))
console.log(fibonnacci(1))
console.log(fibonnacci(2))
console.log(fibonnacci(3))
//0 1 1 2 3 5 8 13 21 34 55