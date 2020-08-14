// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = str =>{
    const strArray = str.split(' ')
    let result = [];
    for(const char of strArray){
      result.push(char.split('').reverse().join(''))
    }
    return result.join(' ')
  }

  reverseWords('Stacy loves Art')