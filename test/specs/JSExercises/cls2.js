class Car{
    constructor(brand,model,year){
        this.brand = brand;
        this.model=model;
        this.year=year;
    }
    displayInfo(){
        return `${this.brand} ${this.model} ${this.year}`;
    }
}
let car = new Car("kia","2",2001);
console.log(car.displayInfo());