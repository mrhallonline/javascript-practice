//write code using while loop that replicates the 99 bottles of beer song.
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.
// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
var beerBottles = 99
function beer() {
    while(beerBottles >=0) {
    if(beerBottles>2){
        console.log(beerBottles + " bottles of beer on the wall, " + beerBottles + " bottles of beer.");
        beerBottles=beerBottles-1;
        console.log("Take one down and pass it around, " + beerBottles + " bottles of beer on the wall");
    } else if (beerBottles===2) {
        console.log(beerBottles + " bottles of beer on the wall, " + beerBottles + " bottles of beer.");
        beerBottles=beerBottles-1;
        console.log("Take one down and pass it around, 1 bottle of beer on the wall");
    }
    else if (beerBottles===1) {
        console.log(beerBottles + " bottle of beer on the wall, " + beerBottles + " bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall");
        beerBottles=beerBottles-1;
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        beerBottles=beerBottles-1;
    }

    }


}

beer();