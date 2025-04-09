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
class ElectricCr extends Car{
    constructor(brand,model,year,batterLife){
        super(brand,year,model)
        this.batterLife = batterLife;
    }
    chargeBattery(){
        return `${super.displayInfo()} and battery life is ${this.batterLife}`
    }
}
let elec = new ElectricCr("kia", "xyzzz",2000,"3yers");
console.log(elec.chargeBattery());
