function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

function getNewObject(id, name, firstPrice, secondPrice) {
    let avaragePrice = firstPrice + secondPrice;
    return {
        id,
        name,
        avaragePrice
    };
}

readTextFile("secondFile.json", function (text) {
    let data = JSON.parse(text);
    let newArray = [];
    for (let i in data) {
        newArray.push(getNewObject(data[i].id, data[i].name, data[i].firstPrice, data[i].secondPrice));
    }
    console.log(newArray);
});