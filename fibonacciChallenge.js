// Create a function that when called will create fibonnaci numbers
// use fibonacciGenerator (n) 
// where n is the number of items in the sequence
// fibonacciGenerator (3) when called should equal [0,1,1] 
// output should be an array for loop should use var i= 0 rather than i=0 for testing.




    
    //Return an array of fibonacci numbers.

    function fibonacciGenerator (n) {
        
        var fibNumbers = [];
        for (var i = 0; i < n; i++){
            if (i <= 1) {
                fibNumbers.push(i);
            } else{
                fibNumbers.push(fibNumbers[i - 2] + fibNumbers[i - 1]);    
            }  
        }
        
        return fibNumbers;
    } 
