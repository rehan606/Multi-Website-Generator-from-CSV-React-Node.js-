

import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import Hero from "../build/foodexpress.com/Hero.jsx"; // ডেমো জন্য - এখানে তুমি যেকোনো ফোল্ডার ইম্পোর্ট করতে পারো
import Contact from "../build/foodexpress.com/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hero />
    <div className="contact ">
      <Contact />
    </div>
  </React.StrictMode>
);

