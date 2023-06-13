import React from 'react';
import Dashboard from "../../components/home/Home";
import Layout from "../../components/layout/Layout";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
          <Layout>
            <Dashboard />
          </Layout>
      </div>
    </div>
  );
};

export default Home;
