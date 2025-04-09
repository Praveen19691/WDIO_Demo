//Write a function that takes two numbers as input and returns their sum, difference, product, and quotient.

/*function arithmetic(a,b){
    let sum = a+b;
    console.log("Sum of two numbers:", sum);
    let difference = a-b;
    console.log("Difference of two numbers:", difference);
    let product = a*b;
    console.log("Product of two numbers:", product);
    let quotient = a/b;
    console.log("Quotient:", quotient)
}
arithmetic(20,10);*/

//Write a function to check if a number is even or odd using the modulo (%) operator.

/*function evenodd(n){
    if(n%2==0){
        console.log("Given number is even");
    }
    else{
        console.log("Given number is odd");
    }
}
evenodd(4);
evenodd(5);*/

//Create a function that takes a number and returns its square and cube using the exponentiation (**) operator.
/*function sqcu(a){
    let square = a*a;
    console.log("Square of a number", square);
    let cube = a**a;
    console.log("Cube of a number", cube);
}
sqcu(5);*/

//Write a script that uses the increment (++) and decrement (--) operators to modify a variable. 
//Also, print pre-increment and post-increment (same for decrement) logics.

//Write a function that takes two numbers and returns true 
//if the first number is greater than the second, otherwise returns false.
/*function greater(a,b){
    if(a>b){
        return true;
    }
    else{
        return false;
    }
}
let re = greater(5,6);
console.log(re);*/

//var great = (number1,number2) => (number1>number2)?"True":"false"
//console.log(great(5,10));

//Create a function that checks if two given values are 
//loosely equal (==) and strictly equal (===)

/*function equality(b,c){
    if(b==c){
        console.log("value are loosely equal");
    }
    else if(b===c){
        console.log("values are strictly equal");
    }
    else{
        console.log("values are not equal");
    }
     
}
//equality(20,"10");
equality(10,"10");*/

//Write a function that determines if a number is in the range 10 - 50 (inclusive).

/*function inclusive(x){
    if(x>=10 && x<=50){
        console.log("Given number lies with range");
    }
    else{
        console.log("Not in range");
    }
}
inclusive(50);*/

//const inc = (x)=>(x>=10 && x<=50)?"in range":"out of range";
//console.log(inc(60));

//Write a function that compares two strings and checks if they are not equal.

/*function str(st2,str3){
    if(st2 !== str3){
        return true;
    }
    else{
        return false;
    }
}
console.log(str("Hello","Hello"));
console.log(str("345",345));
console.log(str("hello","worls"));*/