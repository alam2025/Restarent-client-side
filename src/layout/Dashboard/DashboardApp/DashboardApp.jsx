import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../DashboarNavbar/DashboardNavbar';

const DashboardApp = () => {
      return (

            <div className='w-[80%] mx-auto'>
                  <DashboardNavbar></DashboardNavbar>
                  <Outlet></Outlet>
            </div>

      );
};

export default DashboardApp;