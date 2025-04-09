//1. Equality Check: Write a function isEqual(a, b) that returns true 
//if a and b are equal using == and false otherwise. 
//Also, modify it to use === instead and observe the difference.
/*var x =40;
var y = 40;
function isEqual(a,b){
    if(a == b){
        return true;
    }
    else{
        return false
    }
}
console.log(isEqual(x,y));


var x ="40";
var y = 40;
function isEqual(a,b){
    if(a === b){
        return true;
    }
    else{
        return false
    }
}
console.log(isEqual(x,y));*/

/*//Inequality Check: Write a function isNotEqual(a, b) 
//that returns true if a and b are not equal using !=

function isNotEqual(a,b){
    if(a!=b){
        return true;
    }
    else{
        return false;
    }
}
console.log(isNotEqual(60,"60"));
console.log(isNotEqual(1,1));*/

/*//Strict Inequality Check: Modify the function to use !== instead of != and test with different types.
function isNotEqual(a,b){
    if(a!==b){
        return true;
    }
    else{
        return false;
    }
}
console.log(isNotEqual(60,"60"));
console.log(isNotEqual(1,1));*/


/*Compare Numbers: Write a function compareNumbers(a, b) that returns:
"greater" if a > b
"less" if a < b
"equal" if a == b*/

/*function compareNumbers(a,b){
    if(a>b){
        return "greater";
    }
    else if(a<b){
        return "less";
    }
    else{
        return "equal";
    }
}
let gresult = compareNumbers(60,40);
console.log(gresult);
let lresult = compareNumbers(20,40);
console.log(lresult);
let eresult = compareNumbers(30,30);
console.log(eresult);*/

//Check if Number is Within a 
//Range: Write a function isBetween(x, min, max) that returns true if x is between min and max

function isBetween(x,min,max){
    if(x>min && x<max){
        return true;
    }
    return false;
}
let result = isBetween(5,1,9);
console.log(result);
