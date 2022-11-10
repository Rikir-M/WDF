// const fruits = ["apple","orange","mango","banana","grape","lemon","coconut"]

// for(let i = 0;i < fruits.length;i++){
//     console,log(i,fruits[i]);
// }

// for(fruit of fruits){
//     console.log(fruit)
// }

// for(index in fruits){
//     console.log(index,fruits[index])
// }

// const mgmgInfo = {
//     name : "mgmg",
//     age : 15,
//     job : "student"
// }

// for(key in mgmgInfo){
//     console.log(key,mgmgInfo[key])
// }



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

for(rating of ratings){
    // console.log(rating.id,rating.name,rating.rate)
    for(key in rating){
        console.log(key,rating[key])
    }
    console.log("= = = = = = = = = = = = =")
}