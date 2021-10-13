var mark = prompt("Enter Score: ");
var score = parseInt(mark);
//var grade;
if(score >= 80 && score<= 100){
    //console.log("Grade A");
    var grade = "A";
}
else if(score >= 70 && score<= 79){
    //console.log("Grade B");
    var grade = "B";
}
else if(score >= 60 && score<= 69){
    //console.log("Grade C");
    var grade = "C";
}
else if(score >= 50 && score<= 59){
    //console.log("Grade D");
    var grade = "D";
}
else if(score >= 0 && score<= 49){
    //console.log("Grade F");
    var grade = "F";
}
else{
    console.log("Error");
}

console.log(grade);

console.log("End Program");