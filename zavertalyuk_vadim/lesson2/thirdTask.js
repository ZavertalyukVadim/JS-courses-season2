console.log("Third task:");
let mass = [1, 1, 2, 2, 3, 3, 5];
console.log("Start massive is = " + mass);
let clearMass = [];

for (let i = 0; i < mass.length; i++) {
    if (!clearMass.includes(mass[i])) {
        clearMass.push(mass[i]);
    }
}

console.log("Clear massive is = " + clearMass);
console.log("");