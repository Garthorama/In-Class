var amazingCars = ["BMW","Lexus","Ford", "Mercedes","Oldsmobile"];

var awesomeBirds = ["Bluebird", "Roadrunner","Dessert Dove","Pigeon"];

awesomeBirds.pop();

awesomeBirds.sort();

awesomeBirds.length;


for(var i = 0;i < awesomeBirds.length;i++){
  if (awesomeBirds[i] == "Bluebird"){
    alert("Bluebirds are so beautiful");
    
  }
      else {
        alert("Not as beautiful as Bluebirds");
      }
}