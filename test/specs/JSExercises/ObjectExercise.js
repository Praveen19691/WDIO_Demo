/*let students = [ { name: "Alice", grades: [85, 92, 78] }, { name: "Bob", grades: [70, 75, 80] }, { name: "Charlie", grades: [90, 95, 100] }, ];
Write me a function to calculate average grade
Write me a function to display student averages*/

let students = [ { name: "Alice", grades: [85, 92, 78] }, 
                { name: "Bob", grades: [70, 75, 80] }, 
                { name: "Charlie", grades: [90, 95, 100] }, ];
console.log(students.length);

function average(student){
        let Total = student.grades.reduce((a,b)=>{return a+b})
        let av = Total/student.grades.length;
        console.log(av);
}
students.forEach(average);