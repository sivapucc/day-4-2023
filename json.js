//1.JSON Object Iteration


//for in loop
const obj = {
    "name": "siva",
    "age": "26",
};
for (let i in obj) {
    console.log(i, ":" + obj[i]);
}

//for of loop
const obj1 = {
    "name": "siva",
    "age": "26",
};

for (var value of Object.values(obj1)) {
    console.log(value);
}



// for loop
var arr = [{
    "name": "siva",
    "age": "26",
    "City": "Mayiladuthurai"
}, {
    "name": "Logesh",
    "age": "26",
    "City": "Puducherry"
}];
for (var i = 0; i < arr.length; i++) {
    for (var a in arr[i]) {
        console.log(a, arr[i][a]);
    }
}


//for each
var arr1 = [{
    "name": "siva",
    "age": "26",
    "City": "Mayiladuthurai"
}, {
    "name": "Logesh",
    "age": "26",
    "City": "Puducherry"
}];

let res = arr1.forEach((ele) => console.log(ele));