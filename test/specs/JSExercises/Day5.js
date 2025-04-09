//Write a function that counts the number of vowels in a given string

/*let str = "sandhya";
let count = 0;
let vowel = "AEIOUaeiou";

function countvowel(st){
    for(let char of st){
        if(vowel.includes(char)){
            count++;
    }   }
    return count;
}

console.log(countvowel(str));*/

//Convert a given string into title case (capitalize the first letter of each word)
/*let str = "i am learning javascript";
let str1 = str.split(' ');
console.log(str1);
for(let word of str1){
    let re = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(re);
}*/

//Reverse a given string without using the .reverse() method.

/*let str = "sandhya";
console.log(`String before reverse--- ${str}` )

let rever ='';
for(let i=str.length-1; i>=0; i--){
    rever = rever+str[i];
    
}
console.log(`String after reverse ---- ${rever}`);



//return rever;
//let str2 = str1.reverse();
//let str3 = str2.join('');
//console.log(`String after reverse---- ${str3}`);*/

//Remove duplicates from an array using a Set.
/*let arr = [1,2,2,3,4,5,5,7,8,8];
let mySet = new Set(arr);
console.log(mySet);*/

//Find the common elements between two arrays using a Set
/*let arr1 = ["one","two","three"];
let arr2 = ["three", "four","five"];
for(let ele of arr1){
    let se = new Set(arr2)
    if(se.has(ele)){
        console.log(ele);
        
    }
}*/


//Check if all elements of one array exist in another array using a Set.

/*let arr = [1,2,3,4,5,6,7];
let arrr = [1,2,3,3,5,6,1];
for(let i =0; i<arr.length; i++){
    let sett = new Set(arrr);
    if(!(sett.has(arr[i]))){
        return false
    }else{
        console.log(arr[i]);
    }
}*/

//Count the occurrences of each word in a given sentence using a Map.
/*let str = new Map();
str.set('st','learnin js learning wdio')
console.log(str);*/

//Create a Map to store student names and their grades, then retrieve a student's grade by name
/*let student = new Map()
student.set('sandhya','A');
student.set('mercy','B');
student.set('blessy','A+');

console.log(student);

for(let[key,value] of student){
    console.log(`${key}'s grade is ${value}`)
    
}*/

//Find the first non-repeating character in a string using a Map

/*let str = new Map();
str.set('1','sandhya');
console.log(str);

let arr = Array.from(str);
console.log(arr);

for(let char of str.values){
    if()
}*/

//Create a Person class with properties name and age, and a method greet().

/*class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}
let Person1 = new Person('mercy',23);
Person1.greet();*/

//Extend the Person class to create a Student class 
//with an additional property grade and a method study().
/*class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `My name is ${this.name}, I'm ${this.age} years old`;
    }
}
class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }
    study(){
        return `${super.greet()} and i'm studying ${this.grade} grade now`;
    }
}
let person = new Person("Mercy",23);
console.log(person.greet());
let Student1 = new Student('Mercy',23, "9th");
console.log(Student1.study());*/

//Create a BankAccount class with deposit and withdrawal methods.
/*class BankAccount{
    constructor(mainbalance){
        this.mainbalance = mainbalance;
        //this.abalance = abalance;
        //this.lbalance = lbalance
    }
    deposit(amount){
        if(amount>0){
            this.mainbalance = this.mainbalance+amount;
            
        }
    }
    withdrawl(amount){
        if(amount>0 && amount<=this.mainbalance){
            this.mainbalance = this.mainbalance-amount;
            //return this.mainbalance;
        }
    }
    getBalance(){
        return this.mainbalance;
    }
}
let bankaccount = new BankAccount(500);
bankaccount.deposit(100);
console.log("Total money after 100 Deposited-----" +bankaccount.getBalance());
bankaccount.withdrawl(200);
console.log("Total amount after 200 withdrawl----" +bankaccount.getBalance());*/

//Implement a Rectangle class with methods to calculate area and perimete

class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    area(){
        return this.length * this.width;
    }
    perimeter(){
        return 2* (this.length + this.width);
    }

}
let rectan = new Rectangle(2,3);
console.log("Area of rectangle----" +rectan.area());
console.log("Perimeter of rectangle-----" +rectan.perimeter());