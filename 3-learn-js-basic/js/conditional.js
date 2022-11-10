// conditional statement
// control structure
// flow control || control flow


// if (true){
//     console.log("a")
//     console.log("b")
//     console.log("c")
// }


// //doesn't work if the condition is false. But if you want it to work, use "else" 
// if (false){
//     console.log("a")
//     console.log("b")
//     console.log("c")
// }else{
//     console.log("this is flase")
// }

function canI(age){
    //max age 13 
    // <13 allowed
    // >13 not allowed

    // let result;

    // if(age <= 13){
    //     result ="allowed";
    // }else{
    //     result ="not allowed";
    // }

    // return result;
    
    
    //or

    if(age <= 13) { 
        return "allowed"; 
    }

    return "not allowed";
}

console.log(canI(12))
console.log(canI(12.9))
console.log(canI(15))
console.log(canI(18))



let marks = 90;

if (marks >= 80){
    console.log("Distinction");
}else if(marks >= 40){
    console.log("Pass");
}else if(marks < 40){
    console.log("Fail")
}