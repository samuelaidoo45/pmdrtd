import React from 'react';
import Home from "../../components/home/Home";
import Layout from "../../components/layout/Layout";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
          <Layout>
            <Home />
          </Layout>
      </div>
    </div>
  );
};

export default Home;
