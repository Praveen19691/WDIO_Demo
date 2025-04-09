class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    getAnnualSalary(){
        return this.salary*12
    }
    giveRaise(percentage){
       return this.salary = this.salary+this.salary*(percentage/100);
    }
}
let emp = new Employee("sandhya","300");
console.log(emp.getAnnualSalary());
emp.giveRaise(10);
console.log(emp.salary);