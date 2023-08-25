
import React from 'react';

import MenuItem from '../../../Componets/MenuItem/MenuItem';
import Navbar from '../../../Componets/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import MenuData from '../../../CustomHooks/MenuData/MenuData';

const Home = () => {
      const { menu,isLoading } = MenuData();
      if(isLoading){
            return <h2>Loading ..</h2>
      }
      
      return (
            <div>
                   <ToastContainer/>
                  <Navbar></Navbar>
                  <MenuItem></MenuItem>
            </div>
      );
};

export default Home;