const accountName = "suraj pandey";
let accountId = 12344;
var accountDetails = "loading";
accountBranch = "rudrapur";

console.table([accountName,accountId,accountDetails,accountBranch]);

/*
// Implicitly assigning a value without using let, var, or const
// If not in strict mode, JavaScript creates a global variable (not recommended)
// In strict mode, this will throw a ReferenceError
accountBranch = "rudrapur"; 

// Explicitly declaring a block-scoped variable using let
// This ensures the variable is properly scoped and avoids unintended global variables
let accountBranch = "rudrapur";

*/