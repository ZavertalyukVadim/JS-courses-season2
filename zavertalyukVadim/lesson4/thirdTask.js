function difference(firstArray, secondArray) {
    let newArray = [];
    for (let i in firstArray) {
        if (!secondArray.includes(firstArray[i])) {
            newArray.push(firstArray[i]);
        }
    }
    return newArray;
}


console.log(difference([1, 2, 3, 4], [7, 6, 5, 4, 3]));
console.log(difference([7, 6, 5, 4, 3], [1, 2, 3, 4]));