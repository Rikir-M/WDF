// for(let i = 1; i <=5; i++){
    // console.log(i,"==========")
    // if (i === 3) break; //if break is above, it will stop early

    // if (i === 3) continue;

    // console.log(i, "==========")
// }

// 1စ   5ဆုံး   +1
// let i = 1; i <=5; i++




// const letters = ["a","b","c","d","e"];
// for(let i = 0; i < letters.length; i++){
//     console.log("index",i,"--",letters[i])
// }


// const marks = [69,73,69,72,80,73];
// let totalMark = 0;

// for(let mark = 0; mark < marks.length; mark++){
//     console.log(marks[mark])
//     totalMark += marks[mark];
// }
// console.log("Total : ",totalMark)




// const rikirInfo = {
//     name : "Rikir",
//     age : 19,
//     marks : [
//         {
//             id : 1,
//             subject : "Myanmar",
//             mark : 69
//         },
//         {
//             id : 2,
//             subject : "English",
//             mark : 73
//         },
//         {
//             id : 3,
//             subject : "Maths",
//             mark : 69
//         },
//         {
//             id : 4,
//             subject : "Chem",
//             mark : 72
//         },
//         {
//             id : 5,
//             subject : "Phy",
//             mark : 80
//         },
//         {
//             id : 6,
//             subject : "Bio",
//             mark : 73
//         }
//     ]
// }

//info ထပ်ထည့်ဖို့
// rikirInfo.totalMark = 0;
// rikirInfo.results = {};

//rikirInfo.results.myanmar = "pass"

// for(let i = 0;i < rikirInfo.marks.length; i++){
    // console.log(rikirInfo.marks[i].mark);
    //to get total mark
    // rikirInfo.totalMark += rikirInfo.marks[i].mark
    //to check pass or fail
    // rikirInfo.results[rikirInfo.marks[i].subject] = rikirInfo.marks[i].mark >= 40 ? "pass" : "fail";
    //or if(rikirInfo.marks[i].mark >= 40){
        // rikirInfo.results[rikirInfo.marks[i].subject] = "pass";
    // }else {
        // rikirInfo.results[rikirInfo.marks[i].subject] = "fail"
    // }
// }

// console.log(rikirInfo)



function starGenerator(count,element="*"){
    let star = "";
    for(let i=1;i<=count;i++){
        star += element
    }
    return star;
}



// for (let i=1; i<=6;i++){
//     console.log(starGenerator(i,"* "))
// }




// for (let i=6; i>=1;i--){
//     console.log(starGenerator(i,"= "))
// }


// for(i=1;i<=6;i++){
//     // console.log(starGenerator(i,i%2 === 0 ? "= " : "* "))

//     if(i%2 === 0){
//         console.log(starGenerator(i,"= "))
//     }else{
//         console.log(starGenerator(i,"* "))
//     }
// }


//rating

const ratings = [
    {
        id : 1,
        name: "mg mg",
        rate : 3
    },
    {
        id : 2,
        name : "su su",
        rate : 5
    },
    {
        id : 3,
        name : "hla hla",
        rate : 2
    },
    {
        id : 4,
        name : "kyaw kyaw",
        rate : 4
    },
    {
        id : 5,
        name : "nya nya",
        rate : 1
    },
    {
        id : 6,
        name : "mi mi",
        rate : 2
    },
];

for (i=0;i<ratings.length;i++){
    let result = "";
    for(let x=1;x<=5;x++){
        if(x <= ratings[i].rate){
            result += "* "
        }else{
            result += "- "
        }
    }
    console.log("id :",ratings[i].id,"|","Name :",ratings[i].name,"|","Rating :",result,)
}

// for(i=1;i<=5;i++){
//     let result = "";
//     for(let x=1;x<=5;x++){
//         // if(x <= i){
//         //     result += "* "
//         // }else{
//         //     result += "- "
//         // }
//         result = x <=i ? "* " : "- "
//     }
//     console.log(result,i)
// }