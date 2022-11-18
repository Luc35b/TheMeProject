import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import WhatIsMe from "./components/WhatIsMe";
import {Calendar} from "./components/calendar";
import ClientNav from './components/ClientNav';

function App() {
  return (
    <BrowserRouter>
    {/* <NavBar/> */}
    
    <ClientNav />
    
    <Routes>
      <Route exact path="/" element={<Landing />}/>
      <Route path="/calendar" element={<Calendar />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/WhatIsMe" element={<WhatIsMe />}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
