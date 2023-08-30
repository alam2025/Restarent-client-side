import React, { useEffect, useState } from 'react';
import { useNavigate, useOutlet, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import MenuData  from '../../../CustomHooks/MenuData/MenuData';
import useUrl from '../../../CustomHooks/URL/UseUrl';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../../Componets/Loader';

const Editmenu = () => {
  const [url] = useUrl()
  const { id } = useParams();
  const { menu } = MenuData();
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate();
  const menuItem = menu.find(item => item.id === parseInt(id, 10));

  if (!menuItem) {
    return <Loader/>
  }

  const { name, image, category, recipe, price } = menuItem;
  console.log(menuItem);
  const onSubmit = async(data) => {
    data.id = id;
    try {
      const res = await fetch(`${url}/menu`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();



      if (responseData.Updated > 0) {

        toast.success(responseData.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",

        });
        // deleteShoppingCart();

        // navigate('/dashboard');
        // navigate('/dashboard/allmenu');



      } else {
        toast.error(responseData.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error while sending the order:", error);
      toast.error("Error while sending the order. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }




  };

  return (
    <div className="w-full flex justify-center items-center bg-gray-100 h-screen">
      <div className="w-full bg-white p-6 rounded shadow-md max-w-md">
        <ToastContainer/>
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Menu Item: {menuItem ? menuItem.name : 'Not Found'}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block font-semibold">Name</label>
          <input type="text" defaultValue={menuItem?.name} className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('name')} />

          <label className="block font-semibold">Image URL</label>
          <input type="text" defaultValue={image} className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('image')} />

          <label className="block font-semibold">Price</label>
          <input type="number" defaultValue={price} step="0.01" className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('price')} />

          <label className="block font-semibold">Recipe</label>
          <textarea defaultValue={recipe} className="w-full  bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('recipe')} />



          <label className="block font-semibold">Category</label>
          <input type="text" defaultValue={category} className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('category')} />

          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Editmenu;
