import React from 'react';
import Layout from "../../components/layout/Layout";
import Tasks from "../../components/tasks/Tasks";



const Tasks = () => {
  return (
    <div className="home">
      <div className="homeContainer">
          <Layout>
            <Tasks />
          </Layout>
      </div>
    </div>
  );
};

export default Tasks;
