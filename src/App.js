import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ClientNav from "./components/ClientNav";
import Home from "./components/Home";
import WhatIsMe from "./components/WhatIsMe";
import { Calendar } from "./components/calendar";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Diary from './components/Diary.jsx';
import "./App.css";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <ClientNav />
        <Routes>
        <Route exact path="/TheMeProject" element={<Landing />} />
          <Route exact path="/" element={<Landing />} />
          <Route path="/WhatIsMe" element={<WhatIsMe />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path='/Home'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/Diary'
            element={
              <ProtectedRoute>
                <Diary />
              </ProtectedRoute>
            }
          />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
           <Route
            path='/calendar'
            element={
              <ProtectedRoute>
                <Calendar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
