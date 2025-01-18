import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement(
    "h1",
    {
      id: "title",
      key:"h111",
      style: {
        background:"red", 
      },
      className:"title"
    },
    "heading"
  );
  console.log(heading);
  const heading1 = React.createElement(
    "h2",
    {
      id: "title",
      key: "h222"
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);