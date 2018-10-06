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

    this.getFirstNamePart = function getFirstNamePart() {
        return this.ownerFullName.split(" ")[0];
    };

    this.getSecondNamePart = function getSecondNamePart() {
        return this.ownerFullName.split(" ")[1];
    };

    this.setBrand = function (name) {
        this.brand = name;
    };

    this.setFuelTank = function (name) {
        this.fuelTank = name;
    };

    this.setOwnerFullName = function (firstName, lastName) {
        if (firstName && lastName) {
            this.ownerFullName = firstName + ' ' + lastName;
        }
        else {
            this.ownerFullName = "John Doe";
        }
    };
}

let secondCar = new Car("BMW", "Full", 'Vad Zav');

console.log(secondCar.getBrand());
console.log(secondCar.getFuelTank());
console.log(secondCar.getOwnerFullName());

secondCar.setBrand("Mercedes");
secondCar.setFuelTank("LOw");
secondCar.setOwnerFullName("not");
console.log("");

console.log(secondCar.getBrand());
console.log(secondCar.getFuelTank());
console.log(secondCar.getOwnerFullName());
secondCar.setOwnerFullName("not", "you");
console.log(secondCar.getFirstNamePart());
console.log(secondCar.getSecondNamePart());


