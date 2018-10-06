let user = {};

function BusinessCard(name, occupation) {
    this.name = name;
    this.occupation = occupation;

    this.getName = function getName() {
        return this.name;
    };

    this.setName = function setName(name) {
        this.name = name;
    };
    this.getOccupation = function getOccupation() {
        return this.occupation;
    };

    this.setOccupation = function setOccupation(name) {
        this.occupation = name;
    };

}

Object.defineProperty(user, "name", {value: "Вася", configurable: true, writable: true, enumerable: true});
Object.defineProperty(user, "age", {value: 10, configurable: true, writable: true, enumerable: true});
Object.defineProperty(user, "occupation", {value: "dev", configurable: true, writable: true, enumerable: true});
Object.defineProperty(user, "businessCard", {
    get: function () {
        return new BusinessCard(this.name, this.occupation);

    }
});

console.log(user);
console.log(user.businessCard);