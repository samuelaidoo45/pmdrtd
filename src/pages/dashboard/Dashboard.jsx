import React from 'react';
import DashboardPage from "../../components/dashboard/Dashboard";
import Layout from "../../components/layout/Layout";

const Dashboard = () => {
  return (
    <div className="home">
      <div className="homeContainer">
          <Layout>
              <DashboardPage />
          </Layout>
      </div>
    </div>
  );
};

export default Dashboard;
