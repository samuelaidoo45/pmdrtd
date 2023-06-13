import Home from "./pages/home/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import Tasks from "./pages/task/Tasks";
import Timer from "./pages/timer/Timer";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


function App() {

  return (
    <div className="app">
      <BrowserRouter basename="/pomodoropal">
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="task" element={<Tasks />} />
            <Route path="timer" element={<Timer />} />
            <Route path="logout" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;