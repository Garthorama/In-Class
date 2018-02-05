/* function numberCalculation() {
    var number1 = 45;
    var number2 = 78;
    return number1 * number2
  }
  var multiplyNumbers = numberCalculation

  if (multiplyNumbers < 2000){
    alert("I wish it was a bigger number");
  }
   
  else{
    alert("That's more like it!");
}

function addStrings(string1, string2){
    return string1 + string2;
    }
var fullString = addStrings("I am ", "A full string");

  alert(fullString)

  
    var multiplyNumbers = number1 * number2;
    return multiplyNumbers;
  }
var multiplyNumbers = numberCalculation;
  */

  function nameInfo() {

    var firstName = document.getElementById("FirstName").value;
    var middleName = document.getElementById("MiddleName").value;
    var lastName = document.getElementById("LastName").value;
    
    var fullName = document.getElementById("fullName");
    fullName.innerHTML = firstName +  " " + middleName + " " + lastName;
    }
    
    var clickButton = document.getElementById("cancatenateNames");

    clickButton.addEventListener("click", nameInfo);