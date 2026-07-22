let score = 96;
let grade = calculateGrade(score);
console.log(grade);

function calculateGrade(score) {
switch(true){
    case(score >=90 && score <=100):
        return "A grade";
        break;
    case(score>=80 && score<90):
        return "B grade";
        break;
    case(score>=70 && score<80):
        return "C grade";
        break;
    case(score>=60 && score<70):
        return "D grade";
        break;                  
    case(score>=50 && score<60):
        return "E grade";
        break;
    case(score<50):
        return "F grade";
        break;
}}

