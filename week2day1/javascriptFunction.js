function userProfile(name){
console.log(`Hello ${name}!`);
}

//arrow function
let double = (num) => num * 2;

//anonymous function
let timeOut = function(){setTimeout(function(){
console.log("This message is delayed by 2 seconds");
}, 2000);};

//callback function
function getUserData(callBack){
setTimeout(function(){
 let user = {
        name: "Lavanya",
        age: 30
    };
callBack(user);
}, 3000);
}

userProfile("Lavanya")
console.log(double(5));
timeOut();
getUserData(function (user){
      console.log("Name: " +user.name);
      console.log("Age: " +user.age);
});