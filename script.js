let user = {
    firstName: "Coder",
    lastName: "Bill",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };
  
  let product = {
    cost: 12000,
    deliveryFee: 200,
    newPayments: function () {
      return (this.cost + this.deliveryFee)/10;
    }
  };
  
  let odd = 7;
let even = 20;
let greaterThan;
if(odd > 19 && even > 19){
   greaterThan = true;
} else {
   greaterThan = false;
}

let odd = 7;
let even = 20;
let greaterThan;
if(odd > 19 ||even > 19){
   greaterThan = true;
} else {
   greaterThan = false;
}

let odd = 7;
let even = 20;
let equalTo;
if(odd == even){
   equalTo = true;
} else {
   equalTo = false;
}

let firstSet = ["q", "w", "e", "r", "t", "y"];
let secondSet = ["1", "3", "3", "7"];
let cluster = [...firstSet, ...secondSet];

let goodGrades = ["A", "B"];
let notSoGoodGrades = ["C", "D", "F"];
let grades = [...goodGrades, ... notSoGoodGrades];

function addnumber() {
    x = 28
    return 
}