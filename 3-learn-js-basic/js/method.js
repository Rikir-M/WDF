const mySelf = {
    //property
    name : "Rikir",
    age : 19,
    isSingle : false,

    //method
    teach : function(what,where){
        return "I can teach "+ what+" at "+ where;
    },

    //method ES6
    learn(anything="anything"){
        return `${this.name} can learn ${this.anything}`
    },

    showThis : function(){
        // console.log(this.name,this.age,this.learn())
        console.log(mySelf)
    }
}

console.log(mySelf.showThis())

// console.log(mySelf.teach("English","center"))
// console.log(mySelf.learn("Frontend"))

//if 'this' is outside, it will show Window obj
// console.log(this)