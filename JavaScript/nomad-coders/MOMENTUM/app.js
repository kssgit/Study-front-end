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

//Object 
const playerName = "nico";
const playerPoints = 12123213;
const playerHandsome = false;

const player ={
    name : "nico",
    points : 10,
    fat : true,
}

console.log(player);
console.log(player.name);
console.log(player["points"]);
player.points = 11; //const로 선언된 Object의 변수는 변경 가능 
console.log(player["points"]); // 하지만 player의 값을 바꾸는 건 불가능 player = 10 - > X 
player.lastName = "potato";
console.log(player); //변수 추가 가능

