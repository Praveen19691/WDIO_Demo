//Write a function that takes two boolean values and returns their AND (&&), OR (||), and NOT (!) results.
/*function bool(x,y){
    
}*/

//Create a function that checks if a given number is positive and even using the && operator.
/*function logiclnd(x){
    if(x>0 && (x%2==0)){
        console.log("Given number is +ve even number");
    }
    else{
        console.log("not +ve even number");
    }
}
logiclnd(4);
logiclnd(-4);
logiclnd(5);*/

//Create a login function system where a user can access the system if:
//They have a correct username AND password (&&).
//OR they have an admin override (||).

/*var username = "sndhy";
var psswd = "123@";

function login(user,pswd){
    if(user===username && pswd===pswd){
        console.log("User cn acess");
    }
    else{
        console.log("not uthoried");
    }
}
console.log(login("sndhy","123@"));
console.log(login("sandhya","123@"));*/

//Create a function that takes three numbers and returns the largest using comparison operators

/*function largest(b,c,d){
    if(b>c && b>d){
        return b;
    }
    else if(c>b && c>d){
        return c;
    }
    else{
        return d;
    }

}

console.log(largest(8,9,10));*/

/*Write a program that calculates a discount:
If the purchase amount is above $100, apply a 20% discount.
If the amount is between $50 and $100, apply a 10% discount.
Otherwise, no discount is applied.*/
/*function discount(purchase,disv){
    vr = disv/100*purchase;
    if(purchase>1000){
        let disp = purchase-vr;
        console.log(disp);

    }
    else{
        console.log("no dis")
    }
}
discount(2000,20);*/
//Write a function that takes a year as input and returns true 
//if it's a leap year (divisible by 4 but not 100, unless also divisible by 400).