import React from 'react';
import { Link, NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Home from '../../HOme/Home/Home/Home';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useAdmin from '../../CustomHooks/UseAdmin';

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const navigate = useNavigate();

  if (isAdminLoading) {
    return <h2>Loading..</h2>
  }

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure to Exit?',


      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Exit!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('user')
        navigate('/')
        location.reload()


      }
    })
  }
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
            {
              isAdmin && <>
                <li><NavLink to='addmenu'>Add Menu</NavLink></li>
                <li><NavLink to='allmenu'>All Menu</NavLink></li>
                <li><NavLink to='addemploy'>Add Employee</NavLink></li>
                <li><NavLink to='allemploy'>ALL Employee</NavLink></li>
                <li><NavLink to='report'>Sales Report</NavLink></li>
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
              </>
            }


            <li><NavLink to='/'>Home</NavLink></li>
            <li><button onClick={() => handleLogout()} className=''>LogOut</button ></li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
