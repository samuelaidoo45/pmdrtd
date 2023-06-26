import React from 'react';
import Dashboard from "../../components/dashboard/Dashboard";
import Layout from "../../components/layout/Layout";

import "./home.css";

const Dashboard = () => {
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

export default Dashboard;
