import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h111",
    style: {
      background: "red",
    },
    className: "title",
  },
  "heading with h1"
);

//JSX => React.createELement => Object => HTML(DOM)
//BABEL converts the jsx code to React.createElement () form of code
const heading2 = (
  <h2 id="sub-title" key="h2">
    heading with h2
  </h2>
);
const TitleComponent = () => (
  <div>Title is Vishal Learning React from scratch</div>
);

//React Component
//Functional compoenent and class based component

//functionl compoenent
//name of component starts with capiatal letter  BUT IT IS NOT Mandatory
const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      {heading}
      {heading2}
      <TitleComponent /> //"Component composition : Passing compoenent as props to other compoenents"
      or
      {TitleComponent()}
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
