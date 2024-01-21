const accountId = 144534
let accountEmail = "nishupiya34@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "nishupiya234@gmail.com"
accountPassword = "43524"
accountCity = "Banglore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
