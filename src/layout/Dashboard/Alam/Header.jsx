import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import logo from '../../../../assets/publichome/logo.png';
import { useContext } from 'react';
import useAdmin from '../../../CustomHooks/UseAdmin';
import { AuthContext } from '../../../providers/AuthoProvider';
import Loader from '../../../Componets/Loader';


function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
      const [isAdmin, isAdminLoading] = useAdmin();
      const navigate = useNavigate();


      const [orderdata, setOrderData] = useState([]);
      const { user, loading } = useContext(AuthContext)
      const [open, setOpen] = useState('Open');

      if (isAdminLoading || loading) {
            return <Loader />
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


      const toggleMenu = () => {
            setMenuOpen(!menuOpen);
      };

      return (
            <header className={`p-4 fixed w-full px-[10%]   mx-auto z-10 top-0 bg-white min-h-[100px] shadow-lg ${menuOpen ? 'menu-open' : 'menu-close'}`}>
                  <div className="publicContainer mx-auto">
                        <div className="container mx-auto flex justify-between">
                              {/* Company Logo */}
                              <Link to="/">
                                    <h1 className=" font-bold text-lg ">
                                          Restuarent Menu card
                                    </h1>
                              </Link>

                              {/* Mobile Menu Button */}
                              <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
                                    {menuOpen ? (
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M6 18L18 6M6 6l12 12"
                                                />
                                          </svg>
                                    ) : (
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M4 6h16M4 12h16M4 18h16"
                                                />
                                          </svg>
                                    )}
                              </button>

                              {/* Mobile Menu (hidden by default) */}

                              {/* Desktop Menu */}
                              <nav className="hidden lg:flex items-center space-x-10">

                                    <ul className="flex space-x-4 ">

                                          <li><NavLink className={'text-lg font-semibold'} to='statistics'>Statistics</NavLink></li>
                                          {/* <li><NavLink className={'text-lg font-semibold'} to='allorder'>OrderList</NavLink></li> */}
                                          {
                                                isAdmin && <>
                                                      {/* <li><NavLink className={'text-lg font-semibold'} to='addmenu'>Add Menu</NavLink></li> */}
                                                      {/* <li><NavLink className={'text-lg font-semibold'} to='allmenu'> Menu</NavLink></li> */}
                                                     
                                                      {/* <li><NavLink className={'text-lg font-semibold'} to='addemploy'>Add Employee</NavLink></li> */}
                                                      <li><NavLink className={'text-lg font-semibold'} to='allemploy'> Employees</NavLink></li>
                                                      <li><NavLink className={'text-lg font-semibold'} to='report'>Report</NavLink></li>
                                                      <li>

                                                            <li><NavLink className={'text-lg font-semibold'} to='todays-attendance'>Attendance</NavLink></li>

                                                            {/* <ul>
                                                            <li><NavLink className={'text-lg font-semibold'} to='todays-attendance'>Today Attendance</NavLink></li>
                                                            <li><NavLink className={'text-lg font-semibold'} to="employee-attendance">Employee Attendance</NavLink></li>


                                                      </ul> */}

                                                      </li>
                                                </>
                                          }
                                          <div className='mt-4'>
                                                < hr />
                                          </div>

                                          <li><NavLink className={'text-lg font-semibold'} to='/'>Home</NavLink></li>
                                          <li><button onClick={() => handleLogout()} className={'text-lg font-semibold mb-10'} >LogOut</button ></li>
                                    </ul>

                              </nav>
                        </div>
                        <nav className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} flex flex-col gap-4 p-4`}>
                              {menuOpen && (
                                    <ul className="">
                                          <li><NavLink className={'text-lg font-semibold'} to='statistics'>Statistics</NavLink></li>
                                          <li><NavLink className={'text-lg font-semibold'} to='allorder'>OrderList</NavLink></li>
                                          {
                                                isAdmin && <>
                                                      <li><NavLink className={'text-lg font-semibold'} to='addmenu'>Add Menu</NavLink></li>
                                                      <li><NavLink className={'text-lg font-semibold'} to='allmenu'>All Menu</NavLink></li>
                                                      <li><NavLink className={'text-lg font-semibold'} to='addemploy'>Add Employee</NavLink></li>
                                                      <li><NavLink className={'text-lg font-semibold'} to='allemploy'>ALL Employee</NavLink></li>
                                                      <li><NavLink className={'text-lg font-semibold'} to='report'>Sales Report</NavLink></li>



                                                      <li><NavLink className={'text-lg font-semibold'} to='todays-attendance'> Attendance</NavLink></li>
                                                      {/* <li><NavLink className={'text-lg font-semibold'} to="employee-attendance">Employee Attendance</NavLink></li> */}




                                                </>
                                          }
                                          <div className='mt-4'>
                                                < hr />
                                          </div>

                                          <li><NavLink className={'text-lg font-semibold'} to='/'>Home</NavLink></li>
                                          <li><button onClick={() => handleLogout()} className={'text-lg font-semibold mb-10'} >LogOut</button ></li>
                                    </ul>
                              )}
                        </nav>
                  </div>
            </header>
      );
}

export default Header;