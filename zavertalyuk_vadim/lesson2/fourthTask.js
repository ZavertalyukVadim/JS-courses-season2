function countFibonacci(number) {
    if (number === 1) {
        return 1;
    }
    else {
        return number * countFibonacci(number - 1);
    }
}

console.log("Fourth task with number of elements is :" + 5);
console.log(countFibonacci(5));
console.log("");