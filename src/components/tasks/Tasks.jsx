import React, { useState,useEffect } from 'react';
import MainStyle from './Tasks.module.css';
import TodoList from "../todolist/TodoList";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';


function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [tasks, setTasks] = useState([]); // State to store the tasks from the backend
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);


  const handleBreakTimeChange = (e) => {
    setBreakTime(e.target.value);
  };

  const handleWorkTimeChange = (e) => {
    setWorkTime(e.target.value);
  };


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const baseUrl = 'https://app.tivateonline.com/pomodoropal/api';

  const handleSubmit = (e) => {
  
    e.preventDefault();

    // setUrl(baseUrl+'/todo/createTasks');

    fetch(baseUrl+'/todo/createTasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, workTime, breakTime }),
    }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      }).then((data)=>{
        //reverse the array
        const reversedTasks = data.data.reverse();

        setTasks(prevTasks => [...prevTasks, ...reversedTasks]);

        toast.success('Task added successfully');

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
    fetch(baseUrl+'/todo/getTasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Oops and error occured');
        }
      }).then((data)=>{
        //display data on the page
        //reverse the array
        const reversedTasks = data.data.reverse();

        setTasks(reversedTasks);

      }).catch((error) => {
        // Display an error message to the user
      });
  };

  //call getTasks
  getTasks();
}, []);


const handleDelete = (itemId) => {
  confirmAlert({
    title: 'Confirm deletion',
    message: 'Are you sure you want to delete this item?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
          // Delete the item from the backend
          fetch(baseUrl+'/todo/deleteTask/'+itemId, {
            method: 'DELETE',
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

              toast.success('Task deleted successfully');

            }).catch((error) => {
              // Display an error message to the user

            });
          const updatedData = tasks.filter(item => item.id !== itemId);
          setTasks(updatedData);
        }
      },
      {
        label: 'No',
        onClick: () => { }
      }
    ]
  });
};


  return (
    <>
      

        <h1 className={MainStyle.h1}>Tasks</h1>
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
          Create New Task
        </button>

        {isModalOpen && (
          <div className={MainStyle.modalOverlay}>
            <div className={`${MainStyle.modal} ${MainStyle.largeModal}`}>
               <h2 >Create New Task</h2>

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

                  <label htmlFor="task">Work Time(minute):</label>
                  <input className={MainStyle.select}
                    type="number"
                    id="workTime"
                    value={workTime}
                    onChange={handleWorkTimeChange}
                    placeholder="25"
                  />
                  <br></br>

                  <label htmlFor="task">Break Time(minute):</label>
                  <input className={MainStyle.select}
                    type="number"
                    id="breakTime"
                    value={breakTime}
                    onChange={handleBreakTimeChange}
                    placeholder="5"
                  />

                  <div className={MainStyle.buttonContainer}>

                    <button className={MainStyle.button} type="submit">Create</button>
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
           {/* <TodoList data={tasks} /> */}
           {/* <TodoList data={tasks} /> */}
           <TodoList data={tasks} onDelete={handleDelete} />


        </ul>

    </>
  );
}
export default TasksPage;
