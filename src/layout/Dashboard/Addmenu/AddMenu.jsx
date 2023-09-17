import React from 'react';
import { useForm } from 'react-hook-form';
import useUrl from '../../../CustomHooks/URL/UseUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useCategory from '../../../CustomHooks/GetCategories';
import Loader from '../../../Componets/Loader';

const AddMenu = () => {
  const [allCategories,isCategoryLoading]= useCategory()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [url] = useUrl();

  if(isCategoryLoading)return <Loader/>
  const onSubmit = async (data) => {
   
    try {
      const res = await fetch(`${url}/menu`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();



      if (responseData.InsertedId > 0) {

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

  // Category options
  

  return (
    <>
      <div className="w-[70%] mx-auto border rounded-lg mb-20 flex justify-center items-center bg-gray-100 ">
        <div className="w-full bg-white p-6 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Please Insert Valid Details</h1>
          <hr />
          <ToastContainer></ToastContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input type="text" className="w-full border  border-gray-300 px-3 py-2 rounded" {...register('name', { required: true })} />
              {errors.name && <p className="text-red-500 text-xs mt-1">This field is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Image URL</label>
              <input type="text" className="w-full border  border-gray-300 px-3 py-2 rounded" {...register('image', { required: true })} />
              {errors.image && <p className="text-red-500 text-xs mt-1">This field is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Price</label>
              <input type="number" step="0.01" className="w-full  border border-gray-300 px-3 py-2 rounded" {...register('price', { required: true })} />
              {errors.price && <p className="text-red-500 text-xs mt-1">This field is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Quantity</label>
              <input type="number" step="0.01" className="w-full  border border-gray-300 px-3 py-2 rounded" {...register('quantity', { required: true })} />
              {errors.quantity && <p className="text-red-500 text-xs mt-1">This field is required</p>}
            </div>

            {/* <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">ID</label>
            <input type="text" className="w-full border  border-gray-300 px-3 py-2 rounded" {...register('id', { required: true })} />
            {errors.id && <p className="text-red-500 text-xs mt-1">This field is required</p>}
          </div> */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Category Code</label>
              <select className="w-full  border border-gray-300 px-3 py-2 rounded" {...register('category', { required: true })}>
                <option value="">Select a category</option>
                {allCategories?.map((category, index) => (
                  <option key={index} value={category?.category_name}>
                    {category?.category_name}
                  </option>
                ))}
              </select>
              {errors.category?.category_name && <p className="text-red-500 text-xs mt-1">Please select a category</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Recipe/Description</label>
              <textarea className="w-full border  border-gray-300 px-3 py-2 rounded" {...register('recipe', { required: true })} />
              {errors.recipe && <p className="text-red-500 text-xs mt-1">This field is required</p>}
            </div>
            <div className=' flex items-center justify-center gap-10'>
              <div className="mt-4">
                <Link to='/dashboardapp/allmenu' type="submit" className=" bg-red-500  px-4 py-2 rounded hover:bg-red-600">
                  Cencel
                </Link>
              </div>
              <div className="mt-4">
                <button type="submit" className=" bg-blue-500  px-4 py-2 rounded hover:bg-blue-600">
                  Add Item
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>

    </>
  );
};

export default AddMenu;
