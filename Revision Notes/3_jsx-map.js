// * Using JSX with .map()

// * Revision

// .map() is an array method in JavaScript
// It lets you loop through an array, and do something to each array item
// Finally, it will return a new array, with the changed items inside it

let numbers = [1, 2, 3, 4];

// In a single line ES6 function, we don't need a "return" statement for each loop
let numbersMultipliedBy10 = numbers.map(num => num * 10); // [ 10, 20, 30, 40 ]

// But if we use curly braces, we do need a "return" statement for each loop
let numbersMultipliedBy10Alt = numbers.map(num => {
    return num * 10;
})  // [ 10, 20, 30, 40 ]

// ===============================================================================

// * .map() and JSX

// We can use .map() to create a list, which contains a JSX element for each item in an array.

// Using an array of simple objects as an example...

let namesArr = [
    { firstName: "Bob" },
    { firstName: "Wendy" }, 
    { firstName: "Paul" },
    { firstName: "Tarquin" }
];

// In this case, we can now use .map() to make an array full of JSX LIST ITEM elements, based on the above array:
// * Remember, that when you use .map() to create a list, you should give each new JSX element a "key" attribute

let jsxNamesWithKeys = namesArr.map((obj, index) => {
    return <li key={index}>{obj.firstName}</li>
})

let list = <ul>{jsxNamesWithKeys}</ul> /* See below for value of "list"...

    <ul>
        <li key="0">Bob</li>
        <li key="1">Wendy</li>
        <li key="2">Paul</li>
        <li key="3">Tarquin</li>
    </ul>

*/