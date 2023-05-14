import Home from "./pages/home/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;