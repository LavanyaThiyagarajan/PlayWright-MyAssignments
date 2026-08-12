
function factorial(num : number) : number{
    if(num <0){
        throw "Its a negative number"
    }

    if(num === 0){
        return 0
    }

    if(num === 1){
        return 1
    }

    let result = 1;
    for(let i=2; i<=num; i++){
        result = result *i
    }
    return result
}

console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(0))