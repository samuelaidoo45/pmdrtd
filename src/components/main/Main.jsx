import React from 'react';
import MainStyle from './Main.module.css';

function Main() {
  return (
    <>
      <nav className={MainStyle.nav}>
        <ul className={MainStyle.ul}>
          {/* <li className={MainStyle.li}><a href="#" className="active">Dashboard</a></li>
          <li className={MainStyle.li}><a href="#">To-Do Items</a></li>
          <li className={MainStyle.li}><a href="#">Pomodoro Timer</a></li>
          <li className={MainStyle.li}><a href="#">Settings</a></li>
          <li className={MainStyle.li}><a href="#">About</a></li>
          <link>Dashboard</link> */}
          <link>Dashboard</link>
          <link>Dashboard</link>
        </ul>
      </nav>

      <main className={MainStyle.main}>

        <h1 className={MainStyle.h1}>My Todo List</h1>
        <form className={MainStyle.form}>
          <label htmlFor="filter">Filter by Status:</label>
          <select className={MainStyle.select} id="filter">
            <option value="all">All</option>
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </form>

        <button className={MainStyle.button}>Create New Item</button>

        <ul className={MainStyle.ul}>
          <li className={MainStyle.li}>
            <h2 className={MainStyle.h2}>Item 1</h2>
            <p className={MainStyle.p}>Description of Item 1</p>
            <span className={`${MainStyle.status}  ${MainStyle.notStarted}`}>Not Started</span>
            <div className={MainStyle.actions}>
              <button className={`${MainStyle.button} ${MainStyle.start}`}>Start</button>
              <button className={`${MainStyle.button} ${MainStyle.edit}`}>Edit</button>
              <button className={`${MainStyle.button} ${MainStyle.delete}`}>Delete</button>
            </div>
          </li>
          {/* <li>
            <h2>Item 2</h2>
            <p>Description of Item 2</p>
            <span className="status in-progress">In Progress</span>
            <div className="actions">
              <button className="start">Start</button>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </li>
          <li>
            <h2>Item 3</h2>
            <p>Description of Item 3</p>
            <span className="status completed">Completed</span>
            <div className="actions">
              <button className="start">Start</button>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </li> */}
        </ul>
      </main>
    </>
  );
}

export default Main;
