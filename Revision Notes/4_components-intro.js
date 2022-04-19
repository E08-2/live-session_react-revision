// * REACT COMPONENTS

// * What is a React Component?

// Components are a very important part of React!
// A React component is "an independent and reusable bit of code" (W3 Schools)
// React components "let you split the UI up into independent, reusable pieces" (React docs)
// Like a house is made up of lots of different individual "things" (doors, windows, a roof, walls...)
// ... so a React UI is made up of lots of different individual components, all working together. 

// * There are two ways to make a React component:

// 1. You can use a JavaScript class, which has a render() method 
// * This is known as a "CLASS-BASED" component.

// 2. Or you could use a JavaScript function, which returns JSX code
// * This is known as a "FUNCTIONAL" component.

// ==================================================================

// * 1. Class-based components:

// To make a class-based component, we have to declare a class, which will render some JSX.
// We also need to extend React.Component

class MyClassComponent extends React.Component {
    render() {
        return (
            <div>Hello world!</div>
        )
    }
}

// * Once we have created a class-based component, we can use it like a JSX element!

<MyClassComponent />  // <div>Hello world!</div>

// ================================================================

// * 2. Functional components

// We can also use a regular JSX function to create a component.
// A functional component should always return some JSX.
// If it did not do this, it would not be treated as a React component!

const MyFunctionalComponent = () => {
    return (
        <div>Functional component says hello world!</div>
    )
}

<MyFunctionalComponent />  // <div>Functional component says hello world!</div>

// ===============================================================

// * 3. Which will we be using?

// Using functional components is a more modern way of using React.
// Functional components are becoming more and more popular.
// A functional component is shorter and simpler to write, and understand.
// Class-based components can become quite confusing as they get more complex.
// * So in this module, we will focus on making functional components...
// ... although it will also be good for you to be able to recognize and use class-based components!