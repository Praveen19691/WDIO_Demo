//common elements

let num2 = new Set([1,2,3,4]);
let num3 = new Set([4,5,6,7]);

function common(num2, num3){
    let arr = Array.from(num2);
    console.log(arr);
    let fil= arr.filter(function(x){
        return num3.has(x);
    });
    return fil;
}
let re = common(num2,num3);
console.log(re);