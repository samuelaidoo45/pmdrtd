import React, { useState,useEffect } from 'react';
import MainStyle from './TodoList.module.css';

const TodoList = ({ data, onDelete }) => {

  return (
    <ul>
      {data.map(item => (
        //check if item.status is created

        <li key={item.id} className={MainStyle.li}>
          <h2 className={MainStyle.h2}>{item.title}</h2>
          <p className={MainStyle.p}>{item.description}</p>
          <span className={`${MainStyle.status} ${MainStyle[(item.status=="created")?"notStarted":item.status.toLowerCase()]}`}>
            {item.status}
          </span> 
          <div className={MainStyle.actions}>
            <button className={`${MainStyle.button} ${MainStyle.start}`}>Start</button>
            {/* <button className={`${MainStyle.button} ${MainStyle.edit}`}>Edit</button> */}
            {/* <button className={`${MainStyle.button} ${MainStyle.delete}`}>Delete</button> */}
            <button className={`${MainStyle.button} ${MainStyle.delete}`} onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
