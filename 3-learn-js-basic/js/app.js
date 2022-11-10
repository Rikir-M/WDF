

// function inchesToFeet(input){
//     return showResult(input / 12 + " ft");
// }

// function showResult(text){
//     return "the result is "+text;
// }

// console.log(inchesToFeet(200));
// console.log(inchesToFeet(40));
// console.log(inchesToFeet(24));
// console.log(inchesToFeet(37));
// console.log(inchesToFeet(50));


//array

// let pets = ["dog","cat","parrot","fish"];
// let myself = [
//     "hsu yati myo",
//     19,
//     true,
//     "soon-to-be a developer",
//     ["html","css","js"],
//     "eastDagon",
//     10000
// ];

// //index number သုံးပြီးတန်ဖိုးပြန်ပြောင်းလို့ရ

// // console.log(pets)
// console.log(myself)
// console.log(`My name is ${myself[0]} and ${myself[1]} years old. I live in ${myself[5]} and ${myself[3]}. I understand ${myself[4][2]}`)


//adding new elements
// let arr = [];
// arr[0] = "a";
// arr[1] = "a";
// arr[5] = "a";
// arr[3] = "a";

// console.log(typeof arr);
// console.log(arr);
// console.log(arr.length);



// let arr = [];

// arr[arr.length] = "aaa";
// arr[arr.length] = "bbb";
// arr[arr.length] = "ccc";
// arr[arr.length] = "ddd";

// console.log(arr)
// console.log(arr[0])
// console.log(arr[arr.length-1])


//object
//key:value | property:value

// let myself = {
//     myName:"hsu yati myo",
//     myAge:19,
//     gf:true,
//     job:"soon-to-be a developer",
//     skill:["html","css","js"]
// };

// console.log(typeof myself)
// console.log(myself)
// console.log(myself.myName)
// console.log(myself.myAge)
// console.log(myself.skill)
// console.log(myself.skill[2])

// //or-------------
// console.log(myself["job"])



// let obj = {};

// obj.a = "aaa";
// obj.b = "bbb";
// obj["c"] = "ccc";

// console.log(typeof obj)
// console.log(obj)


// let num = 5;

// num = num + 1;
// num = num + 1;
// num = num + 1;
// num = num + 1;


// num += 1;
// num += 1;
// num += 1;

// ++num;
// ++num;
// ++num;


//++ can be used either at the front or at the back. *++ at the back won't show the value until we use console again. -- will be the same.
// console.log(num++)
// console.log(num)

//NaN stands for "Not a Number"


//Logical Operator && || !

// console.log(!(5>10))

// let condition = true;
// console.log(!condition)

//&& || * +

//more than one condition

// let condition = false || true //true 1, false 0
// let condition = true && false //true 1, false 0

// console.log(condition)

// let x = 5;

// console.log(x > 3 ? true : false)

// let haveUFinishedDinner = true;

// console.log(haveUFinishedDinner ? "ထမင်းစားပြီးပြီ" : "မစားရသေးပါ")

// //or
// let result = haveUFinishedDinner ? "ထမင်းစားပြီးပြီ" : "မစားရသေးပါ";
// console.log(result)


// function run(text="cat"){
//     return "this is a " + text;
// }

// console.log(run())

// const run = function (text="cat"){
//     return "this is a " + text;
// }

// console.log(run("dog"))

//IIFE
// (function(){
//     let x = 5;
//     let y = 10;
//     console.log(x+y)
//     return x+y;
// })()

//expressions can go into expression places

// console.log(` ${(function(){ return 5 })()+10} `);













