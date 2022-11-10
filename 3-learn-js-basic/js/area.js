
const records = [];

function calcArea(width,breadth){
    let area = width * breadth;
    const recordObj = {
        width : width+"ft",
        breadth : breadth+"ft",
        area : area+"sqft"
    }
    records [records.length] = recordObj
    return area+"sqft";
}

console.log(calcArea(17,60))
console.log(calcArea(20,40))
console.log(calcArea(50,90))

//show records

console.table(records)