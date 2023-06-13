import React from 'react';
import Layout from "../../components/layout/Layout";
import TasksPage from "../../components/tasks/Tasks";



const Tasks = () => {
  return (
    <div className="home">
      <div className="homeContainer">
          <Layout>
            <TasksPage />
          </Layout>
      </div>
    </div>
  );
};

export default Tasks;
