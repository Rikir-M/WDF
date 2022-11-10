

// function canIPass(examMark,viperMark){
//     if (examMark >= 60 && viperMark >= 60){
//         return "U Passed";
//     }
//     return "U Failed";
// }

// console.log(canIPass(50,60));
// console.log(canIPass(90,70));
// console.log(canIPass(80,65));

// function canIVote(age,nationality){
//     if (age >= 18 && nationality === "N"){
//         return "can vote";
//     }
//     return "can't vote";
// }

// console.log(canIVote(17,"N"));
// console.log(canIVote(18,"V"));
// console.log(canIVote(20,"N"));
// console.log(canIVote(15,"V"));


// function canICome(busNo){
//     if (busNo === 65 || busNo === 20){
//         return "U will reach Kyuak Myaung";
//     }
//     return "U won't reach Kyuak Myaung";
// }

// console.log(canICome(40));
// console.log(canICome(60));
// console.log(canICome(20));
// console.log(canICome(65));

// let a = "rikir";
// console.log(a);
// a = !a;
// console.log(a);
// a = !a;
// console.log(a);
// a = !a;
// console.log(a);


// let a = true;

// a &&
//     (function (){
//         console.log("hello");
//         return true;
//     })() &&
//     console.log("rikir");


// function showMyName(name){
//     if(typeof name === "string") return name;
//     return false;
// }

// console.log(showMyName(19));
// console.log(showMyName("rikir"));
// console.log(showMyName(["a","b"]));
// console.log(showMyName({a : "a"}));

function run(a,b,c){
    console.log(arguments);
}
console.log(run("a","b","c"));