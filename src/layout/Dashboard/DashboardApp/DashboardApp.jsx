import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../DashboarNavbar/DashboardNavbar';
import Header from '../Alam/Header';

const DashboardApp = () => {
      return (

            <div className='w-[80%] mx-auto mt-36'>
                  <Header></Header>
                  <Outlet></Outlet>
            </div>

      );
};

export default DashboardApp;