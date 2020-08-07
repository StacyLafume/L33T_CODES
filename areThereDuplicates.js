// Implement a function called, areThereDuplicates which accepts a variable number of
//arguments, and checks whether there are any duplicates among the arguments passed in.  
//You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

function areThereDuplicates() {
    let args = [...arguments];
    const argsList = {}
    for(let i = 0; i< args.length; i++){
        let currentArg = args[i];
        argsList[currentArg] ? argsList[currentArg] += 1: argsList[currentArg] = 1
    }
    console.log("this is argsList", argsList)
    for (let two in argsList) {
        if (argsList[two] > 1) {
            return true;
        }
    }
     return false;
};