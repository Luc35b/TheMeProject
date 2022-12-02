import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ClientNav from "./components/ClientNav";
import Home from "./components/Home";
import WhatIsMe from "./components/WhatIsMe";
import { Calendar } from "./components/calendar";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <ClientNav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/WhatIsMe" element={<WhatIsMe />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
