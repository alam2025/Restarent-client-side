import React from 'react';

const MenuCard = ({ menu }) => {
      console.log(menu);
      return (
            <div className=' rounded-lg border flex flex-col'>
                  <img className=' rounded-t-lg' src={menu?.image} alt="" />
                  <div className=' p-4 '>
                        <h1 className=' text-2xl font-semibold'>{menu?.name}</h1>
                        <p className=' text-justify'>
                              {menu?.recipe}
                        </p>
                        <div>
                              <p><span className=' font-semibold'>Category : </span> {menu?.category}</p>
                              <p><span className=' font-semibold'>Price : </span>${menu?.price}</p>
                        </div>

                  </div>
                  <div className=' flex justify-between mt-auto px-6 pb-4'>
                        <button className=' bg-blue-500 px-10 py-2 hover:bg-blue-900 text-white rounded-lg '>Edit</button>
                        <button className='bg-red-500 hover:bg-red-900 text-white px-10 py-2 rounded-lg '>Delete</button>
                  </div>


            </div>
      );
};

export default MenuCard;