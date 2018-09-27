function countFibonacci(number) {
    if (number === 1) {
        return 1;
    }
    else {
        return number * countFibonacci(number - 1);
    }
}

console.log("Fourth task:");
console.log(countFibonacci(5));
console.log("");