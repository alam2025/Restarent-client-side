import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CategoryCard = ({category}) => {
      return (
            <div className=' rounded-md border shadow-md bg-gray-100  max-w-xs'>
                  <div className=' flex items-center gap-3 justify-between pr-5'>
                        <img className=' w-[150px] h-[150px]   rounded-s-md' src={category?.category_image} alt="" />
                        <div>
                              <p>{category?.code}</p>
                              <h1 className=' text-xl font-semibold'>{category?.category_name}</h1>
                              <div className=' flex gap-3 justify-between mt-4'>
                                    <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                    <button className='bg-green-500 text-white px-2 py-1 rounded mr-2'>{category?.status}</button>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default CategoryCard;