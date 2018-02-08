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
    equalTo = True;
    break;
  default:
    equalTo = false;
}