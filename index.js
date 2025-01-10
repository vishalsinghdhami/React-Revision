/*
*H M R: Hot Module Reload (PARCEL is doing)
*File Watcher Algorithm(PARCEL is doing )
*Build(PARCEL)
*Minify(PARCEL)
*cleaning our code(PARCEL)
* IMAGE optimization(PARCEL)
*super fast build algorithm(PARCEL)
*caching while development(PARCEL)
*compression(PARCEL)
*compatible with older verson of browser(PARCEL)
*https server on dev(PARCEL)
*port number(PARCEL)
*consistent hashing(PARCEL)
*zero config(PARCEL)
*/

// package manager handles transitive dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"red", 
      },
      className:"title"
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h2",
    {
      id: "title",
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