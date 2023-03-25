// unary +

/*
let a = "1"
let b = "2"
console.log(+a + +b)
*/

// same thing as Number(...)

/*
console.log(Number(a) + Number(b))
*/

// increment in postfix vs. prefix form
// postfix returns original value vs. post

let a = 1
let b = a++

a = 1
let c = ++a
console.log(b, c)