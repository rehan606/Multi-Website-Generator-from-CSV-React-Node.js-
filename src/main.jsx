
import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import Hero from "../build/foodexpress.com/Hero.jsx"; 
import Contact from "../build/foodexpress.com/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hero />
    <div className="contact ">
      <Contact />
    </div>
  </React.StrictMode>
);

