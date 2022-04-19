// * "STATE" IN REACT

// "State" is a very important concept to understand how React works.

// If we try to update our app using TRADITIONAL VARIABLES (i.e. change the variable, change what the user sees)...
// ... the variable change will not be reflected in the browser (the user won't see any change!)
// * React will ONLY re-render the UI when it is TOLD to do so - it won't do this automatically.
// Instead, you will have to tell React when it should re-render the UI...
// ... e.g. to show the user some updated information.

// ? Ok, so what is state?

// To solve the above problem, we can use "state" in our components.
// Any React component can have STATE - some values that it "remembers", and can update over time.
// The state of a React component at a certain time is like a "snapshot", or a "photograph" of the STATE of that component at that time.

// ? So why is this different to using normal variables?

// Unlike a normal variable, React will automatically RE-RENDER the UI when something managed by state changes.
// If you update the state of a React app, it will compare its "virtual DOM" with the HTML DOM...
// ... and automatically re-render the UI to show what changed!
// * This link, between making CHANGES to the app's state, and re-rendering the UI to show those changes...
// * ... makes state so important in a React app.

// ? How can we use state in a React component?

// It used to be the case that ONLY class-based components could use state - they were known as "stateful" components.
// * However, since React 16.8 (2019) we have also been able to use state in functional components.
// We can manage state inside a functional component using React "hooks".

// ? Hooks?

// * Hooks were implemented in React 16.8 (2019).
// Hooks let you use state and other React features in a functional component - no need to use a class component!
// A "useState" hook allows your functional component to manage a state variable.
// A state variable is a variable managed by state - when it updates, the UI re-renders to show the latest value