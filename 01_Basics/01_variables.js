const accoountId = 12345
let accountEmail = "sachin@google.com"
var accountPassword = "1122"
accountCity = "jaipur"
let accountState;

// accoountId=2//not allowed
accountEmail="ddfaf@.com"
accountPassword="343434"
accountCity="Bengaluru"

console.log(accoountId);
console.table([accoountId,accountEmail,accountPassword,accountCity,accountState])
/* prefer not to use var
because of issue in block scope and functional scope
 */
