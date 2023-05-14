import React from 'react';
import SidebarCss from "./Sidebar.module.css";


function Sidebar() {
  return (
    <>
    <nav>
        <ul>
            <li><a href="#" className="active">Dashboard</a></li>
            <li><a href="#" >To-Do Items</a></li>
            <li><a href="#">Pomodoro Timer</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
    </>
  );
}

export default Sidebar;
