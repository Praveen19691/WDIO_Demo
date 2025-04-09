let arr = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

let person = arr.map((person)=>person.reduce((acc,curr)=>acc+curr));
console.log(person);

let  classum = person.reduce((cl1,cl2)=>cl1+cl2);
console.log(classum)

let average = classum/arr.length;
console.log(average);


/*let arr = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
console.log((arr.map(person=>person.reduce((acc,curr)=>acc+curr)).reduce((cl1,cl2)=>cl1+cl2))/arr.length);*/