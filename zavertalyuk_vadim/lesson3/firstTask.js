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

readTextFile("file.json", function (text) {
    let data = JSON.parse(text);
    // console.log(data);
    let {requestId: a} = data;
    console.log("requestId = " + a);
    let {result: [{accountNumber: b}]} = data;
    console.log("result.accountNumber = " + b);
    let {result: [{balance: {otb: c}}]} = data;
    console.log("result.balance.otb = " + c);
    let {result: [{cards: [{ucid: d}]}]} = data;
    console.log("result.cards.ucid = " + d);
    let {result: [{cards: [{expireDate: e}]}]} = data;
    console.log("result.cards.expireDate = " + e);
    let {result: [{cards: [{expireDate: {year: f}}]}]} = data;
    console.log("result.cards.expireDate.year = " + f);
    let {result: [{overdraftInfo: {lastCloseDayOverBalance: g}}]} = data;
    console.log("result.overdraftInfo.lastCloseDayOverBalance =  " + g);
    let {result: [{bank: {id: h}}]} = data;
    console.log("result.bank.id = " + h);
});
