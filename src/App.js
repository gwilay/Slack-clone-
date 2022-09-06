import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";


// 1st need mo import yung components
import Header from "./components/Header"; //once Imported na call mo siya dun sa element props nung Route
import Sidebar from "./components/Sidebar";
import SidebarOption from "./components/SidebarOption"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <AppBody>
        <Routes>  
           <Route path="/" element={<Header />}/>{/*Copy this pag may idadagdag dun sa YT just change the element*/}
           <Route path="/" element={<Sidebar />}/>
           <Route path="/" element={<SidebarOption />}/>
        </Routes>
        <Sidebar />
        </AppBody>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;

`;
