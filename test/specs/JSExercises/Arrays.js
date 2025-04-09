//1. Find the sum of all elements in array

/*let arr = [2,3,4,5,6];
let sum = arr.reduce((acc,curr)=>acc+curr);
console.log(sum);

let arr1 = [4,5,6];
function summ(acc,curr){
    return acc+curr;
}
let results = arr1.reduce(summ);
console.log(results);*/

//2. Find maximum and minimum in array

/*let arr = [2,3,4,5,6,7];

function maximum(acc,curr){
    if(acc>curr){
        return acc;
        
    }
    else{
        return curr;
    }
}
function minimum(acc,curr){
    if(acc<curr){
        return acc;
        
    }
    else{
        return curr;
    }
}
let maxx = arr.reduce(maximum)
let minn = arr.reduce(minimum);
console.log(maxx);
console.log(minn);


let arr2 = [2,3,4,5,6,7,8];
let max = Math.max(...arr2);
console.log(max);
let min = Math.min(...arr2);
console.log(min);*/

//3. Reverse an array using reverse method
/*let arr = [3,4,5,6,7];
let reverse = [];
for(let i=arr.length-1; i>=0; i--){
    reverse.push(arr[i]);
}
console.log(reverse);*/

//4.Remove duplicates from an array
/*let arr = [1,2,3,4,5,6,7,2,3];
let unique = new Set(arr);
console.log(unique);

let rr = [4,5,6,7,8,2,4,5];
let uni = [];
for(let n of rr){
    if(uni.indexOf(n)===-1){
        uni.push(n);
    }
}
console.log(uni);*/

//5.check if an array is a palindrome

/*let n = [2,3,4,3,2,5];
let re = n.reverse();
console.log(re);

if(re === n){
    console.log("palindrome");
}
else{
    console.log("Not palindrome");
}*/

//6. Find second largest element in an array
/*let b =[3,4,5,6,7,8,8];
let c = new Set(b);
let d = Array.from(c);
console.log(c);

function sortt(a,b){
    return b-a;
}
let re = d.sort(sortt);
console.log(re);
let second = re[1];
console.log(second);*/

//7.Merge two sorted arrays into one sorted array
/*let arr = [2,3,4,12,9,10];
let arr1 = [11,23,12,14,10];
let sarr = arr.sort((a,b) => a-b)
console.log(sarr);
let sarr1 = arr1.sort((b,c) => b - c);
console.log(sarr1);

let merge = sarr.concat(sarr1);
console.log(merge);

let uni = new Set(merge);
console.log(uni);

let s = Array.from(uni)
console.log(s);

let uniq = s.sort((d,e)=>d-e);
console.log(uniq);*/


//first non-repeating character

let arr = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
console.log((arr.map(person=>person.reduce((acc,curr)=>acc+curr)).reduce((cl1,cl2)=>cl1+cl2))/arr.length);