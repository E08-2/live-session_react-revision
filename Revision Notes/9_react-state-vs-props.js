// * REACT - STATE VS. PROPS

// ? Let's remember what we learned at the end of last week...

// * STATE

// Any React component can have state - some values that it "remembers" and can update over time.
// The state of a React app at a certain time is like a "snapshot" or "photograph" of the STATE of the app at that time.

// ? So why is using state different to using normal variables?

// Unlike a normal variable, React will RE-RENDER the UI when something managed by state CHANGES.
// This is what state so important in a React app!

// ? What is the useState hook?

// It used to be the case that only class-based components could use state ("stateful components").
// However since 2019 (specifically, React version 16.8!) we have been able to use HOOKS in functional components...
// Hooks allow us to give extra functionality to functional components, making them much more useful!
// The useState hook is one such hook...
// It lets us manage state in a React functional component.

// * PROPS

// React components can have props - short for "properties".
// We can use props to pass things (e.g. data, references to functions) between components.
// So if a parent component wants to pass data DOWN to a child component, it can use a prop to do that.

// =======================================================

// * What is the difference between STATE and PROPS in React?

// ? Two helpful principles for building React apps...

// * 1. When React apps are handling data, they should use UNI-DIRECTIONAL data flow.
// This means that when data is passed down from parent to child components, it must ONLY flow in this direction.

// * 2. React props should be READ-ONLY.
// You should never try to change data passed down via a prop in the child component...
// ... Instead, any changes should be handled by the app's STATE!

// * Let's put it together...

// State and props both provide ways to handle data in your React app.
// However, STATE is private, and fully controlled in the "stateful" component using the useState hook.

// Therefore, STATE is the way we handle any data CHANGES in our app.
// * To put it in a React way, state should be "the single source of truth" for your app.
// * However, props are just READ-ONLY.
// When some data needed by a child component is changed in state...
// We can pass the new data DOWN (uni-directionally!) to where it is needed...
// * However, we can only PASS the changed data with the prop. The data itself is managed in the app's STATE!