// 기본적인 변수 선언 
//const : 상수 선언
//let : 변수 선언(값 변경 가능)
const a = 10;
const b = 2;
let myName = "성수";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello"+myName);

myName ="김성수";
console.log("your new name is"+myName);

//boolean

const amIFat = null; //값이 없다
let something; // undifind 메모리는 있다
console.log(amIFat);
console.log(something);

//array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

//Get Item from Array
console.log(daysOfWeek[4]);


// Add one more dat to the array
daysOfWeek.push("sun");

console.log(daysOfWeek)

