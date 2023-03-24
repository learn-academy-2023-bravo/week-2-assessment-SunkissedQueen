// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Template of a jest test
  // describe("greeter", () => {
  //   it("returns a generic greeting", () => {
  //     expect(greeter()).toEqual("Hello, LEARN student!")
  //   })
  // })

// Template for pseudocode
// Function Signature
// input: number
// output: string indicating allowed, denied, or error

// input: 39
// output: "Cannot ride the rollercoaster"

// Process
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error

// Template of function
// const greeter = () => {
//   return "Hello, LEARN student!"
// }

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


describe("tripleThat", () => {
  it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]
    expect(tripleThat(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(tripleThat(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})

// Yes, I failed.
// FAIL  ./code-challenges.test.js
// tripleThat
//   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// b) Create the function that makes the test pass.

// Pseudocode
// input: one array of numbers called array
// output: new array of numbers with same length as the original, values are multiplied by three

// input: [6, 7, 8, 9, 10]
// output: [18, 21, 24, 27, 30]

// Process
// create a function called tripleThat
// access each value in the array using iteration, possible methods: .forEach(), .map()
// iteration needs to produce an array with the same length as the original array, .map()
// return value at each index multiplied by three

// Function
const tripleThat = (array) => {
  return array.map((value) => {
    return value * 3
  })
}

// Success
// PASS  ./code-challenges.test.js
// tripleThat
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
