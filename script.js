/*
function addNumber(b) {
  a = 28
  return (a + b)
}

alert(addNumber(11))

function divideNumber(b) {
  a = 48
  return (a/b)
}

alert(divideNumber(6))

function averageNumber(c) {
  a = 4
  b = 18
  return (a + b + c)/3
}

alert(averageNumber(1083))

const addNumber = (a, b) => a + b; 

const divideNumber = (a, b) => a/b;

const averageNumber = (a, b, c) => (a + b + c)/3;
*/

let newProduct = {
  superbGame: "Fallout: New Vegas",
  greatGame: "Elder Scrolls IV: Skyrim",
  bestGame: function () {
    return this.greatGame + " combined with the same character decision impact as " + this.superbGame
  }
}

console.log(newProduct.bestGame())

let wishList = {
  myApartment: "I wish for an apartment",
  myFriend: " and Rose to be with me",
  Success: function () {
    return this.myApartment + this.myFriend
  }
}

console.log(wishList.Success())