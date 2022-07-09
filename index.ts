var x = "raja";
let userName = 3+4;
let $ = 5+3+"4"+8+9;
function bodyload(){
  
let userName:string|null="krishna", Age:number|string=39, subscribed:boolean|null,carName;
subscribed=true;

console.log(`User name = ${userName}\n Age=${Age}\n subscribed=${subscribed}`);
console.log("car name = " + carName);

}
bodyload();
console.log("x value = " + x);
console.log("y value = " + userName);

const cars = ["toyoto","RR","Desire","vagonR"];
cars[0]="Benz";
cars.push("Audi");
console.log("cars = " + cars);
//cars = ["Venkat"]; error can not reassign constant variable

const car = {type:"fiat",model:"500", color:"while"};
car.color="blue"

let text1=" what a very";
text1 += "nice day";
console.log(text1);

let a=10,b=20;
console.log(a!=b);

let c=10;
console.log(c===a);
let votable;
let age =25;
if(isNaN(age)){
  votable = "input is not a number";
}
else{
  votable = (age<18)?"Too young":"Old enough";
}
console.log(votable +"----" + Math.pow(5,2) + "---- " +(5**3));

let d = myFun(3,4);
console.log("function returned value :: "+ d);
function myFun(a, b){
  return a*b;
}

let celcious = myfunFahrenheit(97);
function myfunFahrenheit(fahreinheit){
  return (5/9) * (fahreinheit-32);
}
console.log("function returned value :: "+ celcious);

const person={
  firstName:"venkat",
  lastName:"ch",
  age:36,
  eyeColor:"black",
  fullName: function(){return this.firstName + " " +this.lastName;}
}

console.log(person.age+"---"+person.eyeColor+"---"+person["firstName"]+"-----"+person["lastName"] +" full name is :: " + person.fullName());

let text2 = "abcdefghijklmnopqrstuvwxyz";
let text2length = text2.length;
console.log("length of the string" + text2length);

let text3="we are so-called \"vikas\" from the north";
console.log("quoted string: " + text3);

let text4 = "the character \\ is called backslash";
console.log("back slash string: " + text4);

//Arrays
//way1 to declare an arry
let category:string[] =[];
category[0]="raja";
category[1]="raja";
category[2]="raja";
//category[1]=10; compilation error as category can hold only string type values
//to store different values we need to any type not specific data type like string number etc.


let category2:any[]=[]
category2[0]="TV";
category2[1]=10000;
category2[2]=true;
category2[3]=2;
//arrays iteration using for loop
for(var i=0;i<category.length;i++){
  console.log(category[i]);
}
//arrays iteration using forEach loop
category2.forEach((x,i)=>console.log(x));
//arrays iteration using advanced for loop
for(const x of category2){
  console.log(x);
}
const array=["one","two","three"];
//iterate usign foreach method using lambda expression
array.forEach((intem,index)=>console.log(intem));
//iterate using foreach method using function implementation
array.forEach(function(item,index){
  console.log(item)
});
console.log("------------------------------------")
const numbers=[1,2,3,4,5,6,7,8,9];
const double = numbers.map(n=>n*2);
console.log(numbers);
console.log("------------------------------------")
console.log(double);
console.log("------------------------------------")
const sum = numbers.reduce((total,n)=>n-total,0)
console.log("------------------------------------")
console.log(sum);
console.log("------------------------------------")
let colors=["reg","green","yellow","while","blue"];
for(const color in colors)
{
  console.log(color);
}
console.log("------------------------------------")
colors[0]="orange";
for(const color of colors)
{
  console.log(color);
}

var array1 = ["a","b",'c'];
console.log("------------------------------------")
for(var j in array1)
{
  console.log(array1[j]);
}
console.log("------------------------------------")

console.log("-----------------while loop examples-------------------")
var items=[1,2,3,4,5,6];
var k=0, item;
while(item=items[k++]){
  console.log(item);
}
console.log("------------------------------------")
var k=items.length;
while(k--)
{
  console.log(items[k]);
}
console.log("------------------------------------")
const myArray=[{x:100},{x:200},{x:300},{x:400}];
myArray.forEach((element, index,array)=>{
  console.log(element.x);
  console.log(index);
  console.log(array);
})

console.log("--------------------map method----------------")
const myarray1=[{x:100},{x:200},{x:300},{x:400}];
const newarray = myarray1.map(element=>element.x);
console.log(newarray);
console.log("-------Sum up a particular property, and calculate its average-----------")
const myArray2 = [{x:100}, {x:200}, {x:300}];
const sum1=myArray2.map(element=>element.x).reduce((a,b)=>a+b,0);
console.log(sum1+"========average");
const avg = sum1/myArray2.length;
console.log(avg);
console.log("------Create a new array based on the original but without modifying it-----------");
const myArray3 = [{x:100}, {x:200}, {x:300}];
const newArray3 =myArray3.map(element=>{
  return {
  ...element,
  x: element.x*2
};
});
console.log("original array :: "+myArray3);
console.log("revised array :: "+newArray3);


//-------------------------------------------------
//yet to practice-----------------------------------
//Some use cases of looping through an array in the functional programming way in JavaScript:

//1. Just loop through an array
const myArray4 = [{x:100}, {x:200}, {x:300}];

myArray4.forEach((element, index, array) => {
    console.log(element.x); // 100, 200, 300
    console.log(index); // 0, 1, 2
    console.log(array); // same myArray object 3 times
});
//Note: Array.prototype.forEach() is not a functional way strictly speaking, 
//as the function it takes as the input parameter is not supposed to return a value, 
//which thus cannot be regarded as a pure function.

//2. Check if any of the elements in an array pass a test
const people1 = [
    {name: 'John', age: 23}, 
    {name: 'Andrew', age: 3}, 
    {name: 'Peter', age: 8}, 
    {name: 'Hanna', age: 14}, 
    {name: 'Adam', age: 37}];

const anyAdult = people1.some(person => person.age >= 18);
console.log(anyAdult); // true
//3. Transform to a new array
const myArray5 = [{x:100}, {x:200}, {x:300}];

const newArray5= myArray.map(element => element.x);
console.log(newArray5); // [100, 200, 300]
//Note: The map() method creates a new array with the results of calling a provided 
//function on every element in the calling array.





//6. Count the number of each category
const people3 = [
    {name: 'John', group: 'A'}, 
    {name: 'Andrew', group: 'C'}, 
    {name: 'Peter', group: 'A'}, 
    {name: 'James', group: 'B'}, 
    {name: 'Hanna', group: 'A'}, 
    {name: 'Adam', group: 'B'}];

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
const myArray6 = [{x:100}, {x:200}, {x:300}];

const newArray = myArray6.filter(element => element.x > 250);
console.log(newArray); // [{x:300}] 
//Note: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//8. Sort an array
const people4 = [
  { name: "John", age: 21 },
  { name: "Peter", age: 31 },
  { name: "Andrew", age: 29 },
  { name: "Thomas", age: 25 }
];

let sortByAge = people4.sort(function (p1, p2) {
  return p1.age - p2.age;
});

console.log(sortByAge);
//enter image description here

//9. Find an element in an array
const people = [ {name: "john", age:23},
                {name: "john", age:43},
                {name: "jim", age:101},
                {name: "bob", age:67} ];

//const john = people.find(person => person.name == 'john');
console.log(people);
//enter image description here