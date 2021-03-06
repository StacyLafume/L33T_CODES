// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

// For example:

// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

const solution = (a, b) => {
    // check the length of strings
    // if the length of a is less or equal to than b
    if (a.length < b.length ){
      // return short+long+short
        return a + b + a
    } else {
      // return short+long+short
       return b + a + b
    }
  }
  

  // one line of code 
  const solution2 = (a, b) => a.length < b.length ?  a + b + a :  b + a + b
