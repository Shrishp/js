const accountId = 144553
let accountEmail ="shrish@google.com"
var accountpassward="1234"
accountCity="nanded"
let accountState;

//accountId=2 //not allowed

accountEmail="s@gmail.com"
accountpassward="3414"
accountCity="nyc"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountpassward,accountState,accountCity])