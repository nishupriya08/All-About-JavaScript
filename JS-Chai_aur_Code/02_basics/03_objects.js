//singleton
//object.create


//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Nishu",
    "full name": "Nishu Priya",
    [mySym]: "myKey1",      //important
    age: 18,
    location: "Jaipur",
    email: "nishu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);     //==>Very important for interview

JsUser.email = "nishu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "nishu@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
//console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
