import React from 'react';
import "./sidebar.css";


function Sidebar() {
  return (
    <nav>
      <ul>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
