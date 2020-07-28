// var arg;
function logType(arg) {
    if (typeof arg === "undefined") {
        console.log("undefined!");
    } else if (arg === null) {
        console.log("null!");
    } else if (typeof arg === "number") {
        if (isNaN(arg) === true) {
            console.log("not a number!");
        } else {
            console.log("number!");
        }
    } else if (typeof arg === "string") {
        console.log("string!");
    } else if (typeof arg === "boolean") {
        console.log("boolean!");
    } else if (typeof arg === "bigint") {
        console.log("bigint!");
    } else if (Array.isArray(arg) === true) {
        console.log("array!");
    } else if (typeof arg === "function") {
        console.log("function!");
    } else if (typeof arg === "object") {
        console.log("object!");
    } else {
        console.log("I have no idea!");
    }
}

// second part

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};
for (var prop in a) {
    b[a[prop]] = prop;
}
console.log(b);

// third part

for (var it = 10; it > 0; it--) {
    console.log(it);
}
