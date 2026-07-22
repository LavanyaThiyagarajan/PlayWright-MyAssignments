let number = -9;
checkNumberType(number);

function checkNumberType(num) {
    if(num > 0) {
        console.log("positive");
    } else if(num < 0) {
        console.log("negative");
    } else {
        console.log("neutral"); //zero is considered neutral
    }
}