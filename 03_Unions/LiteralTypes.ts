// Literal types are incredibly powerful for narrowing the possible values of a variable.
// 
// A string can have an infinite number of values.
// A number can have an infinite number of values.

// This kinda sucks... direction can be any string! To be fair, in many languages enums are used to solve this problem. 
function move(direction:string){}

// A literal value can be used as a type:
function move(direction: "north") {}
// Now direction can only be "north"!
