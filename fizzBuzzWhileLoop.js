
// output.push(3);
// console.log(output);

// var.push() appends to the array
// output.pop;

// pops off the last item in the array



var output = [];
var count = 1;
function fizzBuzz(){
    while (count<100) {

    if (count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    else if (count%3===0){
        output.push("Fizz");
    }
    else if (count%5===0){
        output.push("Buzz");
    }
    else {output.push(count);
    }
    count++;
}
    console.log(output);
}
fizzBuzz();
