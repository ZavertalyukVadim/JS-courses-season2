let arbitraryNumbersFirst = [6, 10, 2, 3];
let arbitraryNumbersSecond = [6, 10, 2, 3];
console.log("Initial array = " + arbitraryNumbersFirst);

function sort(massive) {

    var n = massive.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (massive[j + 1] < massive[j]) {
                var t = massive[j + 1];
                massive[j + 1] = massive[j];
                massive[j] = t;
            }
        }
    }
    return massive;
}

console.log("Second task first part:");
console.log(sort(arbitraryNumbersFirst));
console.log("Initial array = " + arbitraryNumbersSecond);
console.log("Second task second part:");
console.log(arbitraryNumbersSecond.sort(function (a, b) {
    return a - b;
}));
console.log("");