//Check if a String is a Palindrome

/*let str = "madam";
let astr = str.split('');
let rstr = astr.reverse('');
let cstr = rstr.join('');
console.log(rstr);
console.log(cstr);

if(str == cstr){
    console.log("Given string is palindrome");
}
else{
    console.log("Given string is not a palindrome");
}*/

//Count Vowels in a String

/*let count=0;
function countvowels(st){
    let Vowels = "AEIOUaeiou";
    for(let ch of st){
        if(Vowels.includes(ch)){ //for(let i =0; i<str.length; i++  includes(str[i]))
            count++;
        }
    }
    return count;
    
}
console.log(countvowels("Sandhya"));*/

//Find the First Non-Repeating Character
/*let str = "abbbacde";
for(let char of str){
    if(str.indexOf(char)===str.lastIndexOf(char)){
        console.log(char);
        break;
    }
}*/

//Replace All Occurrences of a Substring
/*let st2="HCL wipro HCL infosys";
let nst = st2.replaceAll("HCL","HCLTech");
console.log(nst);*/

//Count the Number of Words

/*let str = "javascript wdio manualtesting";
let words = str.split(' ');
console.log(words.length);*/

//Find the Longest Word in a String
/*function longest(str){
    //let str = "javascript wdio manualtesting"
    let words = str.split(' ');
    let longestword = "";

    for(let word of words){
        if(word.length > longestword.length){
            longestword=word;
        
        }
    }
    return longestword;
}

let stt = longest("javascript wdio manualtesting")
console.log(stt);*/

//Count the Number of Occurrences of a Character

/*function oc(str,char){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str[i]===char){
            count++;
        }
    }
    return count;
}
let re = oc("Sndhyaaaa","a");
console.log(re);*/

//Convert a given string into title case (capitalize the first letter of each word).

/*let str = "i am learning javascript";
let rs = str.split(' ');
console.log(rs);
for(let word of rs){
    let re = word.charAt(0).toUpperCase()+word.slice(1);
    console.log(re);
}*/

//Create a Map to store student names and their grades, then retrieve a student's grade by name.

/*let mymap = new Map()
mymap.set("sandhya","A");
mymap.set("Indu","B");
mymap.set("Suji","C");
console.log(mymap);

for(let[key,value] of mymap){
    console.log(`${key} grade is : ${value}`)
}*/


/*sorting based on keys
let mapp = new Map();
mapp.set("1","Sandhya");
mapp.set("3","Indu");
mapp.set("2","suji");

console.log(mapp);

let arr = Array.from(mapp);
console.log(arr);

function sortt(a,b){
    return a[0]-b[0];
}
arr.sort(sortt);
console.log(arr);

Map(3) { '1' => 'Sandhya', '3' => 'Indu', '2' => 'suji' }
[ [ '1', 'Sandhya' ], [ '3', 'Indu' ], [ '2', 'suji' ] ]
[ [ '1', 'Sandhya' ], [ '2', 'suji' ], [ '3', 'Indu' ] ]*/


