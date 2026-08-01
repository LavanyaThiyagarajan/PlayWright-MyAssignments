let s = "Hello World";
let splitWord = s.split(" ");
console.log(splitWord[splitWord.length-1].length);

let s1 = "fly me  to  the moon";
let splitWord1 = s1.trim().split(" ");
console.log(splitWord1[splitWord1.length-1].length);

function isAnagram(str1, str2){
let normalisedString1 = str1.toLowerCase().split("").sort().join("").trim();
let normalisedString2 = str2.toLowerCase().split("").sort().join("").trim();

 if(normalisedString1 === normalisedString2) {
       return true;
    } else {    
       return false;
    }
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
