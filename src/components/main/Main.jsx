import React, { useState,useEffect } from 'react';
import MainStyle from './Main.module.css';
import { Link } from 'react-router-dom';
import TodoList from "../todolist/TodoList";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [tasks, setTasks] = useState([]); // State to store the tasks from the backend


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const baseUrl = 'http://127.0.0.1:5000';

  const handleSubmit = (e) => {
  
    e.preventDefault();

    setUrl(baseUrl+'/api/todo/createTasks');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      }).then((data)=>{
        // console.log(data);
        //setTasks(data.data);
        setTasks(prevTasks => [...prevTasks, data.data]);


      }).catch((error) => {
        // Display an error message to the user
      });
      
    //capture the data from the form and submit it to the backend
    closeModal();
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //get the data from the backend and display it on the page
  useEffect(() => {

  const getTasks = () => {
    fetch(baseUrl+'/api/todo/getTasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Oops and error occured');
        }
      }).then((data)=>{
        console.log(data);
        //display data on the page
        setTasks(data.data);
        

      }).catch((error) => {
        // Display an error message to the user
      });
  };

  //call getTasks
  getTasks();
}, []);

  return (
    <>
      <nav className={MainStyle.nav}>
        <ul className={MainStyle.ul}>
          <Link className={MainStyle.li} to='#'>Dashboard</Link>
          <Link className={MainStyle.li} to='#'>To-Do Items</Link>
          <Link className={MainStyle.li} to='#'>Pomodoro Timer</Link>
          <Link className={MainStyle.li} to='#'>Settings</Link>
          <Link className={MainStyle.li} to='#'>About</Link>
        </ul>
      </nav>

      <main className={MainStyle.main}>

        <h1 className={MainStyle.h1}>Tasks List</h1>
        <form className={MainStyle.form}>
          <label htmlFor="filter">Filter by Status:</label>
          <select className={MainStyle.select} id="filter">
            <option value="all">All</option>
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </form>

        <button className={`${MainStyle.button} ${MainStyle.createNewItem}`} onClick={openModal}>
          Create New Item
        </button>

        {isModalOpen && (
          <div className={MainStyle.modalOverlay}>
            <div className={`${MainStyle.modal} ${MainStyle.largeModal}`}>
               <h2 >Add New Item</h2>

              <div className={MainStyle.modalContent}>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="task">Task:</label>
                  <input className={MainStyle.select}
                    type="text"
                    id="task"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter task"
                  />
                  <br></br>
                  <label htmlFor="taskDescription">Task Description:</label>
                  <textarea className={MainStyle.select}
                    id="taskDescription"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter task description"
                  ></textarea>

                  <br></br>
                  <div className={MainStyle.buttonContainer}>

                    <button className={MainStyle.button} type="submit">Submit</button>
                    <button className={MainStyle.button} type="button" onClick={closeModal}>
                      Close
                    </button>

                  </div>


                </form>
              </div>
            </div>
          </div>
        )}

        <ul className={MainStyle.ul}>
          {/* <li className={MainStyle.li}>
            <h2 className={MainStyle.h2}>Item 1</h2>
            <p className={MainStyle.p}>Description of Item 1</p>
            <span className={`${MainStyle.status}  ${MainStyle.notStarted}`}>Not Started</span>
            <div className={MainStyle.actions}>
              <button className={`${MainStyle.button} ${MainStyle.start}`}>Start</button>
              <button className={`${MainStyle.button} ${MainStyle.edit}`}>Edit</button>
              <button className={`${MainStyle.button} ${MainStyle.delete}`}>Delete</button>
            </div>
          </li> */}
           <TodoList data={tasks} />

        </ul>

      </main>
    </>
  );
}
export default Main;
