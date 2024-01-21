// function definition
function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("U");
}

// function reference  => sayMyName

// function Execution
//sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

//addTwoNumber(3, 5)
//addTwoNumber(3, "5")
//addTwoNumber(3, null)

// const result = addTwoNumber(3, 5)

// console.log("Result: ", result);

/* function addTwoNumber(number1, number2){
    let result = number1 + number2;
    return result;
    console.log("Nishu");           // => "Nishu" not give in o/p as it written after return keyword
    
}*/


function addTwoNumber(number1, number2){
    // let result = number1 + number2;
    // //console.log("Nishu");
    // return result;
    return number1 + number2
    
}

const result = addTwoNumber(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//loginUserMessage("nishu")

//console.log(loginUserMessage("nishu"));
//console.log(loginUserMessage());


//function calculateCartPrice(...num1){
    function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
    username: "nishu",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondVale(getArray){
    return getArray[1]
}

//console.log(returnSecondVale(myNewArray));
console.log(returnSecondVale([200, 400, 500, 1000]));