function countFibonacci(number) {
    var a = 1, b = 0, temp;
    var mass = [];
    while (number >= 1) {
        temp = a;
        a = a + b;
        b = temp;
        mass.push(b);
        number--;
    }
    return mass;
}

console.log("Fourth task with number of elements is :" + 5);
console.log(countFibonacci(5));
console.log("");