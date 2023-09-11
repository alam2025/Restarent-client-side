import React from 'react';
import { Link } from 'react-router-dom';

const ShowCategories = () => {
      return (
            <div>
                  <h1 className="text-2xl text-center font-bold mb-5">Categories</h1>
                  <div className='flex gap-2 items-center md:gap-20  justify-center m-4'>

                        <input
                              type='search'
                              className='py-2 px-10 w-full outline-none rounded-lg  text-black shadow-sm bg-slate-100' // Add border and border-black classes
                              placeholder='Search...'

                        />
                        <Link className='btn bg-blue-500 text-white' to='/dashboardapp/add-category'><button >Add Category</button></Link>
                  </div>
            </div>
      );
};

export default ShowCategories;