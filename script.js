const time = 0700;
let wakeUp;

if (time === 0730) {
  wakeUp = true;
}
else {
  wakeUp= false;
}
let age = 15;
let oldEnough;
let soClose;
let tooYoung;

if (age >= 18) {
  oldEnough = true;
}
else if(age >= 16) {
  soClose = "You're almost there";
}
else {
  tooYoung = true;
}

const defaultParam = (a, b=10) => a *b;

let doubleAge = (age) => age * 2;

const addName = ( firstName, lastName) => firstName + " " + lastName;