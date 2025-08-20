// Objects

let user = {}

User = new Object();

user = {}

// Iterating through an array

var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(arr[i]);
}

// Use of while, do while and for loop

arr.forEach(function (item, index, entireArray) {
    console.log(item);
    console.log(index);
    console.log(entireArray);
});

let newUser = {
    'name': 'Ram',
    'age': 25,
    'gender': 'Male',
    'isMarried': true
}

newUser['country'] = 'India';

delete newUser['isMarried'];

let keys = Object.keys(newUser); // ['name', 'age', 'gender', 'country']
keys.forEach(function (key) {
    console.log(newUser[key]);
});


// Input

let fruit=prompt("Enter a fruit name","Apple");

let bag={
    'Apple': 10,}

alert(bag.Apple);

// Iterating through Objects

var array=[1,2,3,4];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);      
}

// Use of while ,do while

array.forEach(function(item,index, entireArray){
    console.log(item);
    console.log(index);
    console.log(entireArray);
});

let newUser={
    name:'Ram',
    age: 25,
    gender:'Male',
}

delete newUser['gender'];


let keys2 =Object.keys(newUser); // ['name', 'age']
keys.forEach(function(key){
    console.log(newUser[key]);
});

// Functions

let sum=(a,b) => a+b;
// Equal to
let sum1 =function sum(a, b) {
    return a + b;
}   
