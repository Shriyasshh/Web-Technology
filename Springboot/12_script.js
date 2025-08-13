// Constractor Design Pattern

//   Ways to create an object in JavaScript

var newObject = {};
// or
var newObject = Object.create(Object.prototype);
// or
var newObject = new Object();

const object = new ConstructorObject();

// prototype Pattern

var myCar = {
    name: "Ford",
    brake: function () {
        console.log("brake");
    },
    panic: function () {
        console.log("I am panicking");
    },
};

var yourCar = Object.create(myCar);

console.log(yourCar.name);

// Module design Pattern

function Container() {
    const cont = [];

    function addData(name) {
        cont.push(name);
    }

    function getAllData() {
        return cont;
    }
    function removeData(name) {
        const index = cont.indexOf(name);
        if (index < 1) {
            throw new Error("Data not Found");
        }
        cont.slice(index, 1);
    }

    return {
        add: addData,
        get: getAllData,
        remove: removeData,
    };
}

const cont = Container();
cont.add("A");
cont.add("B");
cont.add("C");
console.log(cont.get());

cont.remove("C");
console.log(cont.get());

// Singleton Pattern

function databaseconnection() {
    let instance = null;
    let count = 0;

    function init() {
        console.log("Opening database -> " + (count + 1));
    }

    function createInstance(params) {
        if (instance === null) {
            instance = init();
        }
        return instance;
    }

    function closeInstance() {
        instance= null;
    }
     return {
        open:createInstance,
        close: closeInstance,
     }
}

const database = databaseconnection();
database.open(); // Opening database -> 1
database.open(); // Opening database -> 1
database.close();
