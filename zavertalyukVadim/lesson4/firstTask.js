function Animal(brand, fuelTank, ownerFullName) {
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

let animal = new Animal("BMW", "Full", 'Vad Zav');

console.log(animal.getBrand());
console.log(animal.getFuelTank());
console.log(animal.getOwnerFullName());

animal.setBrand("Mercedes");
animal.setFuelTank("LOw");
animal.setOwnerFullName("not yours");

console.log("");
console.log(animal.getBrand());
console.log(animal.getFuelTank());
console.log(animal.getOwnerFullName());