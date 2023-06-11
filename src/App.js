import Home from "./pages/home/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import { BrowserRouter, StaticRouter, Route, Switch } from 'react-router-dom';
import React from 'react';


function App() {

  return (
    <div className="app">
      <StaticRouter basename="/pomodoropal/build">
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Home />} />

          </Route>
        </Routes>
      </StaticRouter>
    </div>
  );
}

export default App;