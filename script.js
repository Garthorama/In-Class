let phoneNumberPresent = true;
let needsNumber;

switch(phoneNumberPresent){
  case true:
    needsNumber = false;
     break;
  
  case false:
      needsNumber = true;
      break;
  default:
      needsNumber = "Try Again";
}

let numberTen = 10;
let numberFive = 5;
let equalTo;

switch (numberTen == numberFive) {
  case true:
    equalTo = true;
    break;
  default:
    equalTo = false;
}

let age = 15;
let watchMovie = age > 14 ? true : false;

let hotDog = false;
let isHotDog = hotDog === true ? "Hot Dog" : "Not Hot Dog";

alert(isHotDog)