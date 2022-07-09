var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var x = "raja";
var userName = 3 + 4;
var $ = 5 + 3 + "4" + 8 + 9;
function bodyload() {
    var userName = "krishna", Age = 39, subscribed, carName;
    subscribed = true;
    console.log("User name = ".concat(userName, "\n Age=").concat(Age, "\n subscribed=").concat(subscribed));
    console.log("car name = " + carName);
}
bodyload();
console.log("x value = " + x);
console.log("y value = " + userName);
var cars = ["toyoto", "RR", "Desire", "vagonR"];
cars[0] = "Benz";
cars.push("Audi");
console.log("cars = " + cars);
//cars = ["Venkat"]; error can not reassign constant variable
var car = { type: "fiat", model: "500", color: "while" };
car.color = "blue";
var text1 = " what a very";
text1 += "nice day";
console.log(text1);
var a = 10, b = 20;
console.log(a != b);
var c = 10;
console.log(c === a);
var votable;
var age = 25;
if (isNaN(age)) {
    votable = "input is not a number";
}
else {
    votable = (age < 18) ? "Too young" : "Old enough";
}
console.log(votable + "----" + Math.pow(5, 2) + "---- " + (Math.pow(5, 3)));
var d = myFun(3, 4);
console.log("function returned value :: " + d);
function myFun(a, b) {
    return a * b;
}
var celcious = myfunFahrenheit(97);
function myfunFahrenheit(fahreinheit) {
    return (5 / 9) * (fahreinheit - 32);
}
console.log("function returned value :: " + celcious);
var person = {
    firstName: "venkat",
    lastName: "ch",
    age: 36,
    eyeColor: "black",
    fullName: function () { return this.firstName + " " + this.lastName; }
};
console.log(person.age + "---" + person.eyeColor + "---" + person["firstName"] + "-----" + person["lastName"] + " full name is :: " + person.fullName());
var text2 = "abcdefghijklmnopqrstuvwxyz";
var text2length = text2.length;
console.log("length of the string" + text2length);
var text3 = "we are so-called \"vikas\" from the north";
console.log("quoted string: " + text3);
var text4 = "the character \\ is called backslash";
console.log("back slash string: " + text4);
//Arrays
//way1 to declare an arry
var category = [];
category[0] = "raja";
category[1] = "raja";
category[2] = "raja";
//category[1]=10; compilation error as category can hold only string type values
//to store different values we need to any type not specific data type like string number etc.
var category2 = [];
category2[0] = "TV";
category2[1] = 10000;
category2[2] = true;
category2[3] = 2;
//arrays iteration using for loop
for (var i = 0; i < category.length; i++) {
    console.log(category[i]);
}
//arrays iteration using forEach loop
category2.forEach(function (x, i) { return console.log(x); });
//arrays iteration using advanced for loop
for (var _i = 0, category2_1 = category2; _i < category2_1.length; _i++) {
    var x_1 = category2_1[_i];
    console.log(x_1);
}
var array = ["one", "two", "three"];
//iterate usign foreach method using lambda expression
array.forEach(function (intem, index) { return console.log(intem); });
//iterate using foreach method using function implementation
array.forEach(function (item, index) {
    console.log(item);
});
console.log("------------------------------------");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var double = numbers.map(function (n) { return n * 2; });
console.log(numbers);
console.log("------------------------------------");
console.log(double);
console.log("------------------------------------");
var sum = numbers.reduce(function (total, n) { return n - total; }, 0);
console.log("------------------------------------");
console.log(sum);
console.log("------------------------------------");
var colors = ["reg", "green", "yellow", "while", "blue"];
for (var color in colors) {
    console.log(color);
}
console.log("------------------------------------");
colors[0] = "orange";
for (var _a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
    var color = colors_1[_a];
    console.log(color);
}
var array1 = ["a", "b", 'c'];
console.log("------------------------------------");
for (var j in array1) {
    console.log(array1[j]);
}
console.log("------------------------------------");
console.log("-----------------while loop examples-------------------");
var items = [1, 2, 3, 4, 5, 6];
var k = 0, item;
while (item = items[k++]) {
    console.log(item);
}
console.log("------------------------------------");
var k = items.length;
while (k--) {
    console.log(items[k]);
}
console.log("------------------------------------");
var myArray = [{ x: 100 }, { x: 200 }, { x: 300 }, { x: 400 }];
myArray.forEach(function (element, index, array) {
    console.log(element.x);
    console.log(index);
    console.log(array);
});
console.log("--------------------map method----------------");
var myarray1 = [{ x: 100 }, { x: 200 }, { x: 300 }, { x: 400 }];
var newarray = myarray1.map(function (element) { return element.x; });
console.log(newarray);
console.log("-------Sum up a particular property, and calculate its average-----------");
var myArray2 = [{ x: 100 }, { x: 200 }, { x: 300 }];
var sum1 = myArray2.map(function (element) { return element.x; }).reduce(function (a, b) { return a + b; }, 0);
console.log(sum1 + "========average");
var avg = sum1 / myArray2.length;
console.log(avg);
console.log("------Create a new array based on the original but without modifying it-----------");
var myArray3 = [{ x: 100 }, { x: 200 }, { x: 300 }];
var newArray3 = myArray3.map(function (element) {
    return __assign(__assign({}, element), { x: element.x * 2 });
});
console.log("original array :: " + myArray3);
console.log("revised array :: " + newArray3);
//-------------------------------------------------
//yet to practice-----------------------------------
//Some use cases of looping through an array in the functional programming way in JavaScript:
//1. Just loop through an array
var myArray4 = [{ x: 100 }, { x: 200 }, { x: 300 }];
myArray4.forEach(function (element, index, array) {
    console.log(element.x); // 100, 200, 300
    console.log(index); // 0, 1, 2
    console.log(array); // same myArray object 3 times
});
//Note: Array.prototype.forEach() is not a functional way strictly speaking, 
//as the function it takes as the input parameter is not supposed to return a value, 
//which thus cannot be regarded as a pure function.
//2. Check if any of the elements in an array pass a test
var people1 = [
    { name: 'John', age: 23 },
    { name: 'Andrew', age: 3 },
    { name: 'Peter', age: 8 },
    { name: 'Hanna', age: 14 },
    { name: 'Adam', age: 37 }
];
var anyAdult = people1.some(function (person) { return person.age >= 18; });
console.log(anyAdult); // true
//3. Transform to a new array
var myArray5 = [{ x: 100 }, { x: 200 }, { x: 300 }];
var newArray5 = myArray.map(function (element) { return element.x; });
console.log(newArray5); // [100, 200, 300]
//Note: The map() method creates a new array with the results of calling a provided 
//function on every element in the calling array.
//6. Count the number of each category
var people3 = [
    { name: 'John', group: 'A' },
    { name: 'Andrew', group: 'C' },
    { name: 'Peter', group: 'A' },
    { name: 'James', group: 'B' },
    { name: 'Hanna', group: 'A' },
    { name: 'Adam', group: 'B' }
];
/*const groupInfo = people3.reduce((groups, person) => {
    const {A = 0, B = 0, C = 0} = groups;
    if (person.group === 'A') {
        return {...groups, A: A + 1};
    } else if (person.group === 'B') {
        return {...groups, B: B + 1};
    } else {
        return {...groups, C: C + 1};
    }
}, {});*/
//console.log(groupInfo); // {A: 3, C: 1, B: 2}
//7. Retrieve a subset of an array based on particular criteria
var myArray6 = [{ x: 100 }, { x: 200 }, { x: 300 }];
var newArray = myArray6.filter(function (element) { return element.x > 250; });
console.log(newArray); // [{x:300}] 
//Note: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//8. Sort an array
var people4 = [
    { name: "John", age: 21 },
    { name: "Peter", age: 31 },
    { name: "Andrew", age: 29 },
    { name: "Thomas", age: 25 }
];
var sortByAge = people4.sort(function (p1, p2) {
    return p1.age - p2.age;
});
console.log(sortByAge);
//enter image description here
//9. Find an element in an array
var people = [{ name: "john", age: 23 },
    { name: "john", age: 43 },
    { name: "jim", age: 101 },
    { name: "bob", age: 67 }];
//const john = people.find(person => person.name == 'john');
console.log(people);
//enter image description here
