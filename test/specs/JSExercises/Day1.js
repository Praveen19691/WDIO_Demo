//A. Declare a variable using var inside a function and try accessing it outside the function
 
function sum(){
    var a = 10;
    var b = 20;
    return a+b;
}
console.log(sum()); //output is 30
 
let multiply = a*b; //Error: Trying to access a and b outside the function causes an error
console.log(multiply);
 
//B. Declare a variable using let inside a block {} and try accessing it outside.
/*let arr = [1,2,3,4,5];
for(let i of arr){
     console.log(i); //output is 1 2 3 4 5
}
console.log(i); //Error: i is block scoped, so it only exists in the loop
 
 
// C. Declare a variable using const inside a block {} and try reassigning it
function sum(){
     const a = 10;
     a=30; //Error: bcz reassignment not possible for const
     var b =20;
     return a+b;
}
console.log(sum());
 
 
// 2A. Declare a var variable twice in the same scope and observe the behavior
function add(){
     var a=10;
     var a=20;
     return a+a;
}
console.log(add()); //output: 40 Redeclaration is possible
 
 
//2B. Try redeclaring a let variable in the same scope and observe the error
function add(){
     let a=10;
     let a=20;
     return a+a;
}
console.log(add()); //Error Because redeclaration is not possible using let
 
 
//2C. Try using a const variable before it's declared and note the error
let a = 10;
let b =20;
console.log(sum);
const sum = a+b; 
console.log(sum); //Error: cannot be access before initialization but it is possible with var*/