//Data 1GB ကို 2,150ks

function canIBuy(amount){
    let result;
    if(amount > 2150){
        result = "Success";
    }else{
        result = "Not enough balance";
    }
    return result;
}

console.log(canIBuy(1700))
console.log(canIBuy(2150))
console.log(canIBuy(3000))
console.log(canIBuy(2200))



//အရပ်၄ပေနဲ့အထက်မှ roller coaster စီးလို့ရ

function amIAllowed(height){
    if(height >= 4){
        return "Allowed";
    }
    return "Not allowed"
}

console.log(amIAllowed(3.5))
console.log(amIAllowed(4))
console.log(amIAllowed(3))
console.log(amIAllowed(5))



//အသက် ၁၈ ပြည့်မှ ဆေးလိပ်ဝယ်လို့ရ

function isItLegal(age){
    let result;
    if(age < 18){
        result = "Illegal";
    }else{
        result = "Legal";
    }
    return result;
}

console.log(isItLegal(17))
console.log(isItLegal(20))
console.log(isItLegal(15))
console.log(isItLegal(18))



//flight ချိန်က ၁၀နာရီခွဲ

function amIInTime(arrivalTime){
    if (arrivalTime <= 10){
        return "In Time";
    }
    return "Not in time";
}

console.log(amIInTime(10.5))
console.log(amIInTime(10))
console.log(amIInTime(12))
console.log(amIInTime(9))



//1တန်ထက်ယာဉ်မဝင်ရ

function canMyCarGo(weight){
    if(weight <= 1){
        return "Allowed";
    }
    return "Not allowed";
}

console.log(canMyCarGo(1.5))
console.log(canMyCarGo(1))
console.log(canMyCarGo(2))
console.log(canMyCarGo(0.5))




//in a game that has total 5 rounds

let wonMatch = 5;
if(wonMatch = 5){
    console.log("Perfect Win");
}else if(wonMatch >= 3){
    console.log("Win");
}else if(wonMatch < 3){
    console.log("Lose");
}



//Eng level test

let marks = 70;
if (marks >= 80){
    console.log("Advanced");
}else if (marks >= 60){
    console.log("Intermediate");
}else if (marks < 50){
    console.log("Primary");
}



//pollution

let percentage = 25;
if (percentage > 50){
    console.log("Polluted");
}else if (percentage < 30){
    console.log("Clean");
}else if (percentage >= 90){
    console.log("Very polluted");
}



//temperature

let temperature = 33;
if (temperature >= 31){
    console.log("Please bring UV protection");
}else if (temperature < 30){
    console.log("Sunny");
}else if (temperature < 20){
    console.log("Chill weather");
}



//to buy gaming laptop

let amount = 800; //dollar
if (amount >= 999){
    console.log("ASUS TUF FX504");
}else if (amount >= 883){
    console.log("ASUS TUF FX505DT");
}else if (amount >=799.33){
    console.log("ASUS TUF F15");
}