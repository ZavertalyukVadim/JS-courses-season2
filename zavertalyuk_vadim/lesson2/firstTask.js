let massive = [1, 2, 3];

function countSumm(massive) {
    let totalSum = 0;
    for (var i = 0; i < massive.length; i++) {
        totalSum += massive[i];
    }
    return totalSum;
}

console.log("First task:");
console.log('Sum = ' + countSumm(massive) + ' of ' + massive);
console.log("");