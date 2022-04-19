// * SINGLE RESPONSIBILITY PRINCIPLE

// Looking at the "BootstrapCard" project that we just completed...
// ... It has the below component structure:

/* 

* Project "family tree"

                <App />                                     Parent component
                   |
            <BootstrapCard />                               Child component
            /              \
        <CardImg />     <CardBody />                        Grandchildren components
                       /     |       \
         <CardTitle />   <CardText />  <CardButton />       Great-grandchildren components

*/

// With React, it is both a design principle and a good idea to "simplify" our components as much as possible.

// * A popular way to achieve this is the "single responsibility principle".
// This is the idea that a component "should only do (or be responsible for) one thing".

// ? How?

// If a component is doing more than one thing by itself...
// ... we could give it some child components...
// ... each child component can handle one of the "things" that its parent is currently responsible for!

// ? Why?

// We keep the different "parts" of our app separate so we can work on them individually.
// This reduces the cost (in time and resources) of fixing or changing the app over time.

// ? A real life example...

// In real life, when we look at a car...
// We see that it is a complete car - you can sit in it, drive it etc.
// But it is also made up of lots of smaller "parts" (wheels, engine, the body), all working together to make a functioning car.
// ... And all of those parts are made up of even smaller parts (e.g. all the different parts of the engine!)
// * We want our React apps to work like this...
// * ... lots of small parts, working together, to create something big - which works as we want!