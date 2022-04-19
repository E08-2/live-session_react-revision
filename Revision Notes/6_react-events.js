// * EVENTS IN REACT

// When using vanilla JavaScript, we learned that the best way to handle events is via an event listener...

// ==============================================
// * Option 1 - JS
// ==============================================
// Select a button element
const button = document.querySelector("button");

// Add an event listener to the "button" element
button.addEventListener("click", () => {
    // Do something
});

// However, we also briefly discussed an alternative option...
// It is possible to use an event handler inside your HTML elements themselves...

// ==============================================
// *Option 2 - HTML
// ==============================================
<html>
    <body>
        <button onclick="doSomething()"></button>
    </body>
</html>

// ==============================================
// *Option 2 - JS
// ==============================================
const doSomething = () => {
    // Do something
}


// ============================================================================


// * In React, the second option is actually best practice... with a few small syntax changes!

// ==============================================
// * React - JSX
// ==============================================

<button onClick={doSomething}></button>

// ? Key differences to Option 2 (above):

// * 1. Written in camel case (e.g. "camelCase")
// * 2. Uses React's "curly brace" syntax, rather than a string
// * 3. Passes a pointer to the function you want to run (doSomething), rather than a function call (doSomething()).