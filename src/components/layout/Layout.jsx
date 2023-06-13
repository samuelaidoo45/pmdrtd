import React from 'react';
import MainStyle from './Layout.module.css';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {

  return (
    <>
      <nav className={MainStyle.nav}>
        <ul className={MainStyle.ul}>
          <li className={MainStyle.li}>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li className={MainStyle.li}>
            <Link to='/task'>Tasks</Link>
          </li>
          <li className={MainStyle.li}>
            <Link to='/timer'>Pomodoro Timer</Link>
          </li>
          <li className={MainStyle.li}>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
      </nav>

      <main className={MainStyle.main}>
        {children}
      </main>
    </>
  );
}

export default Layout;
