//alert("Welcome to my page!")

var myFavoriteNumber = 11

var myFavoritePet = "Iguana"

var rainIsLovely = true

var numberOne = 24

var numberTwo = 57

var addNumbers = numberTwo + numberOne

var divideNumbers = numberTwo/numberOne
// Different variations to set variables
var inputGrade = prompt("Enter a grade:");
var parsedInt = parseInt(inputGrade);
var grade;



if (parsedInt>=90){
   grade = "A";
}
else if (parsedInt>=80){
   grade = "B";
}
else if (parsedInt>=70){
   grade = "C";
}
else if (parsedInt>=60){
   grade = "D";
}
else {
  grade = "F"
}
alert(grade);