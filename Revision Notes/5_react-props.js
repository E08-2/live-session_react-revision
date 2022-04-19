// * 1. Structuring React Projects

// Usually our whole UI is contained in one "parent" component called App.js
// We can export <App /> and import it into index.js. This is where we render the UI in the "root" HTML element.
// The App component will be made up of many child components, which can live in a "components" directory.
// We can make the child components available for export, and import them where they are needed.

// ================================

// * 2. PROPS

// "props" are an important concept in React.
// React components can have props - short for "properties".

// We can use props to pass data between components.
// So if a parent component has some data it wants to pass to a child component, it can use props to do that.
// * Note that props are READ ONLY! We use them to pass data, but not change it.

// ========================

// * 2A. App.js - parent

import SayHello from "./components/SayHello/SayHello";

const App = () => {
    return (
        <div className="container">
            {/* Pass props to the child components */}
            <SayHello firstName="Jamie" age={35} />
        </div>
    );
};

// ========================

// * 2B SayHello.js - child

// Now use props parameter to access props from the parent component
const SayHello = props => {
    return <p>Hello {props.firstName}, you are {props.age} years old!</p>;
}