import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1st need mo import yung components
import Header from "./Header"; //once Imported na call mo siya dun sa element props nung Route

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Header />}/>{/*Copy this pag may idadagdag dun sa YT just change the element*/}
            {/* <h1>This is my homepage</h1> outdated feature Removed. */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
