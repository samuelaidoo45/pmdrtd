// import Sidebar from "../../components/sidebar/Sidebar";
import React from 'react';
import Main from "../../components/main/Main";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
          <Main />
      </div>

    </div>
  );
};

export default Home;
