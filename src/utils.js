
console.log('utils.js is running')

const square = (x) => x * x

const add = (a, b) => a + b

const subtract = (a, b) => a - b;

// exports - default export - named export

// named export (many)
export { square, add, subtract as default };

// default export (just one)
