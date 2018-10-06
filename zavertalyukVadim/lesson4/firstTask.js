function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;
    this.ownerFullName = ownerFullName;
    this.getBrand = function getBrand() {
        return this.brand;
    };

    this.getFuelTank = function getFuelTank() {
        return this.fuelTank;
    };

    this.getOwnerFullName = function getOwnerFullName() {
        return this.ownerFullName;
    };

    this.setBrand = function (name) {
        this.brand = name;
    };

    this.setFuelTank = function (name) {
        this.fuelTank = name;
    };

    this.setOwnerFullName = function (name) {
        this.ownerFullName = name;
    };
}

let car = new Car("BMW", "Full", 'Vad Zav');

console.log(car.getBrand());
console.log(car.getFuelTank());
console.log(car.getOwnerFullName());

car.setBrand("Mercedes");
car.setFuelTank("LOw");
car.setOwnerFullName("not yours");

console.log("");
console.log(car.getBrand());
console.log(car.getFuelTank());
console.log(car.getOwnerFullName());