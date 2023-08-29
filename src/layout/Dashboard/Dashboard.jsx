import React, { useContext, useState } from 'react';
import { Link, NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Home from '../../HOme/Home/Home/Home';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useAdmin from '../../CustomHooks/UseAdmin';
import { AuthContext } from '../../providers/AuthoProvider';

const Dashboard = () => {

  const [isAdmin, isAdminLoading] = useAdmin();
  const navigate = useNavigate();
  const { authInfo } = useState(AuthContext);
  const { user, loading } = useContext(AuthContext)
  const [open, setOpen] = useState('Open');

  if (isAdminLoading || loading) {
    return <h2>Loading..</h2>
  }
  console.log(user)
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
          <div className="lg:hidden flex justify-center">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle text-center" />
            <button className='btn btn-sm p-2 shadow-2xl'>
              <label onClick={() => setOpen(open === 'Open' ? 'Close' : 'Open')} htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                {open} Drawer
              </label>
            </button>

          </div>

          <Outlet></Outlet>

        </div>
        <div className="drawer-side relative ">
          <label htmlFor="my-drawer-2 " className="drawer-overlay "></label>
          <ul className="menu p-4 w-60 h-full text-black font-bold  shadow-2xl bg-gray-400">
            <div className=''>
              <h2 className='font-bold uppercase text-2xl text-center'>{user.name}</h2>
              <p className='text-center p-2'>{user.role}</p>

            </div>
            <div className='my-10'>
              < hr />
            </div>


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
            <div className='my-6'>
              < hr />
            </div>

            <li><NavLink to='/'>Home</NavLink></li>
            <li><button onClick={() => handleLogout()} className=''>LogOut</button ></li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
