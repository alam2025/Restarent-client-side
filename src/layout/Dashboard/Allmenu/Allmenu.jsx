import React, { useState } from 'react';
import MenuData from '../../../CustomHooks/MenuData/MenuData';
import { Link, useNavigate } from 'react-router-dom';
import useUrl from '../../../CustomHooks/URL/UseUrl';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../../Componets/Loader';
import MenuCard from './MenuCard';

const Allmenu = () => {
  const { menu, isLoading, refetch } = MenuData();
  // const[url]=useUrl();

  // const    navigate=useNavigate();
  // const categories = [...new Set(menu.map(item => item.category))];

  // const [selectedCategory, setSelectedCategory] = useState('salad');
  const [searchQuery, setSearchQuery] = useState('');

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  
  // const handleDelete = async (itemToDelete) => {
  //   try {
  //     const response = await fetch(`${url}/menu`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ id: itemToDelete.id }), // Pass the ID in the request body
  //     });

  //     if (response.ok) {
  //       // Item deleted successfully
  //       toast.success('Item deleted successfully', {
  //         position: 'top-right',
  //         autoClose: 3000, // Adjust the autoClose duration as needed
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       console.log('Item deleted:', itemToDelete.id);
  //       refetch();

  //       // You can update your UI or fetch updated menu data here
  //     } else {
  //       const errorData = await response.json();
  //       toast.error(`Error deleting item: ${errorData.message}`, {
  //         position: 'top-right',
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       console.error('Error deleting item:', errorData.message);
  //     }
  //   } catch (error) {
  //     toast.error('An error occurred while deleting the item.', {
  //       position: 'top-right',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     console.error('Error while deleting item:', error);
  //   }
  // };

  const filteredMenuItems = menu.filter((menuItem) =>
  menuItem?.name.toLowerCase().includes(searchQuery.toLowerCase())
);
  const filteredMenu = menu.filter(item =>
   
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold mb-3">Restaurant Menu</h1>

      <div className='flex gap-2 items-center md:gap-20  justify-center m-4'>
       
        <input
          type='search'
          className='py-2 px-10 w-full outline-none rounded-lg  text-black shadow-sm bg-slate-100' // Add border and border-black classes
          placeholder='Search...'
          onChange={handleSearchChange}
        />
         <Link className='btn bg-blue-500 text-white' to='/dashboardapp/addmenu'><button >Add Item</button></Link>
      </div>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          filteredMenuItems?.map((m, index) => <MenuCard menu={m} key={index} />
          )
        }
      </div>

    </div>
  );
};

export default Allmenu;
