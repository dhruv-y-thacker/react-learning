import React from "react";
import ReactDOM from "react-dom/client";


//old way of creating element by using createElement method of React
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");//tag, props, children
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//new way of creating element by using JSX
// const heading = <h1 id="heading">Namaste React</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//JSX is not HTML, it is a syntax extension of JavaScript. It is used to create React elements. It is not mandatory to use JSX, but it is recommended to use it as it makes the code more readable and easier to write.

//new way of creating element by using react functional component

// const HeadingComponent = () => { //A React component is a function that returns a React element. It is a reusable piece of code that can be used to create multiple elements. It is a convention to start the name of a React component with a capital letter.
//     return <h1 id="heading">Namaste React by jsx component</h1>;
// }
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(<HeadingComponent />);

//component composition - React components can be composed together to create more complex components. This is done by using one component inside another component. This is called component composition. It is a powerful feature of React that allows us to create reusable components and build complex user interfaces.
// const TitleComponent = () => {
//     return <h1 id="heading">Namaste React by jsx component</h1>;
// }
// const HeaderComponent = () => {
//     return (
//         <div>
//             <TitleComponent />
//             {/* <TitleComponent></TitleComponent> */}
//             {/*{TitleComponent)()}*/}
//             {/*we can same component in multiple ways 3 ways above*/}
//             <h1>Hello world !</h1>
//         </div>
//     );
// }
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(<HeaderComponent />);



//using react createElement method to create nested elements
// const container = React.createElement(
//     "div",
//     { id: "container" },
//     React.createElement(
//         "div",
//         { id: "sub-container" },
//         [
//             React.createElement(
//                 "h1",
//                 { id: "heading", key: "h1" },
//                 "Heading 1"
//             ),
//             React.createElement(
//                 "h2",
//                 { id: "sub-heading", key: "h2" },
//                 "Heading 2"
//             )
//         ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);



//using jsx
// const jsxContainer = (
//     <div id="container">
//         <div id="sub-container">
//             <h1 id="heading" key="h1">Heading 1</h1>
//             <h2 id="sub-heading" key="h2">Heading 2</h2>
//         </div>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxContainer);


//using functional component
// const Container = () => {    
//     return (
//         <div id="container">
//             <div id="sub-container">
//                 <h1 id="heading" key="h1">Heading 1</h1>
//                 <h2 id="sub-heading" key="h2">Heading 2</h2>
//             </div>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Container />);
