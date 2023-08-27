import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Home from '../../HOme/Home/Home/Home';

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

          <Outlet></Outlet>

        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2 " className="drawer-overlay "></label>
          <ul className="menu p-4 w-60 h-full text-black font-bold  shadow-2xl bg-gray-400">
            {/* Sidebar content here */}
            <li><NavLink to='statistics'>Statistics</NavLink></li>
            <li><NavLink to='allorder'>OrderList</NavLink></li>
            <li><NavLink to='addmenu'>Add Menu</NavLink></li>
            <li><NavLink to='allmenu'>All Menu</NavLink></li>
            <li><NavLink to='addemploy'>Add Emply</NavLink></li>
            <li><NavLink to='allemploy'>ALL Emply</NavLink></li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><NavLink to='todays-attendance'>Today Attendance</NavLink></li>
                  <li><NavLink to="employee-attendance">Employee Attendance</NavLink></li>
                  <li><NavLink to="attendance-sheet">Attendance Sheet</NavLink></li>
                  
                </ul>
              </details>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
