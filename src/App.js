// import Home from "./pages/home/Home";
// import LandingPage from "./pages/landingpage/LandingPage";
// import Login from "./pages/login/Login";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from 'react';


// function App() {

//   return (
//     <div className="app">
//       <BrowserRouter basename="/pomodoropal/build">
//         <Routes>
//           <Route path="/">
//             <Route index element={<LandingPage />} />
//             <Route path="login" element={<Login />} />
//             <Route path="dashboard" element={<Home />} />

//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, StaticRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import LandingPage from './pages/landingpage/LandingPage';
import Login from './pages/login/Login';

function App({ isServer }) {
  const Router = isServer ? StaticRouter : BrowserRouter;

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
