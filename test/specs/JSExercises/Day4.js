//Write a for loop to print all even numbers from 1 to 20
/*for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}*/

//Reverse an Array using a for loop

/*let arr = [1,2,3,4,5];
let len = arr.length;
console.log(len);
let reverse =[]
for(let i=arr.length-1; i>=0; i--){
    reverse.push(arr[i]);
}
console.log(reverse);*/

//Write a program that sums numbers from 1 to 10 using a while loop.
/*let sum = 0;
let num = 1;
while(num<=10){
    sum= sum+num;
    num++;
}
console.log("sum of numbers from 1 to 10", +sum);*/

//Function to Check Prime Number

/*function isPrime(num){
    if(num%2==1){
        return num;
    }
    else{
        return "not prime";
    }
   
}
console.log(isPrime(5));
console.log(isPrime(4));*/

//Convert the below function into an arrow function.
//function greet(name) {
  //  return `Hello, ${name}!`;
//}

//let greet = (name)=> {return `Hello, ${name}`}
//console.log(greet("Sandhya"));

//Arrow Function to Find Maximum in an Array

let arr = [2,3,4,5,6,7]
let max = ()=>{

}

//Multiline String using Template Literals
/*let extrainfo = "by using javascript & WDIO "
let str = `i
           am
           learning
           automation testing ${extrainfo}`;


console.log("Given string:" +str);*/

//Extract values from an array using destructuring.
//const colors = ["Red", "Green", "Blue"];

/*const colors = ["Red", "Green", "Blue"];
const [first,second,third] = colors;
//let re = first;
//console.log(re);
console.log(first);
console.log(second);
console.log(third);*/

/*Object Destructuring
const person = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 30
};*/

/*const person = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 30
};
const{firstName:Name,lastName:surname,age:years}=person;
console.log(Name);
console.log(surname);
console.log(years);*/

/*Function with Destructured Parameters
const user = {
    username: "coder123",
    email: "coder@example.com",
    role: "admin"
};*/

/*const user = {
    username: "coder123",
    email: "coder@example.com",
    role: "admin"
};

function userProperties({username,email,role}){
    console.log(`The user name is: ${username}`);
    console.log(`Email id: ${email}`);
    console.log(`Role of user : ${role}`);
}
userProperties(user);*/

//8. Format a String with Template Literals

/*let namee = "sandhya";
let surname = "Kola";
let company = "HCL Tech";
let Experience = "2";

let combined = `My name is ${surname} ${namee} I am in working ${company} having ${Experience} years of experience`;
console.log(combined);*/

//Arrow Function to Find Maximum in an Array




