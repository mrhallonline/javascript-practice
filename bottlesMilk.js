function getMilk(money) { 
  
    var bottles = Math.floor(money/1.5) 
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + calcbottles(money, 1.5) + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money%1.5;
  }

  function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
  }

  function calcChange(startingMoney, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
  }
console.log("Hello master, here is your " + getMilk(5) + " change.");
  