// let a = 10
// const b = 20
// var c = 30

let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER: ", a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

//console.log(a)
//console.log(b)
//console.log(c)
//console.log(a);



//              Nested Scope

function one(){
    const username = "Nishu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()

if(true){
    const username = "nishu"
    if (username === "nishu") {
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

// ++++++++++++++++++++ Interesting +++++++++++++++++
console.log(addone(5));
function addone(num){
    return num + 1
}
//addone(5)


addTwo(5)       // got error
const addTwo = function(num){
    return num +2
}

//addTwo(5) 