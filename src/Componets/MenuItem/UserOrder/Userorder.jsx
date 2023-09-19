import React, { useEffect, useState } from 'react';
import { deleteShoppingCart, getShoppingCart } from '../../utitilies/databse';
import { useForm } from 'react-hook-form';
import useUrl from '../../../CustomHooks/URL/UseUrl';

import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Userorder = () => {
      const navigate = useNavigate()
      const [orderdata, setOrderData] = useState([]);
      const [total, setTotal] = useState(0);
      const groupedOrders = {};
      const [url] = useUrl();
      const [quantity, setQuantity] = useState(1);

      const { register, handleSubmit, reset, formState: { errors } } = useForm();
      const [formData, setFormData] = useState();




      const handleChange = (e) => {
            const { name, value } = e.target;

            setFormData(e.target.value)
      };
      useEffect(() => {
            let data = getShoppingCart();


            if (Array.isArray(data)) {
                  setOrderData(data);
                  console.log(data);
                  const total = data.reduce((total, orderItem) => {
                        return total + orderItem.foodPrice * orderItem.quantity;
                  }, 0);
                  setTotal(total.toFixed(2));
            } else {
                  console.error("Error: getShoppingCart() did not return an array.");
            }
      }, [quantity]);




      const onSubmit = async (data, e) => {
            e.preventDefault();

            const orderItem = {
                  name: data.name,
                  mobile: data.mobile,
                  orderdata_array: orderdata,
                  total: total,
                  wayToPayment: formData,

            };



            try {
                  const res = await fetch(`${url}/orderItem`, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(orderItem),
                  });

                  const responseData = await res.json();



                  if (responseData.InsertedId > 0) {
                        reset()
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
                        deleteShoppingCart();
                        const goToHone=()=>{
                              
                              navigate('/')
                        }

                        setTimeout(goToHone, 5000)



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
      // Group the order data by phone number
      orderdata.forEach(orderItem => {
            const { Food_name, foodPrice, quantity, mobile } = orderItem;
            if (!groupedOrders[mobile]) {
                  groupedOrders[mobile] = [];
            }
            groupedOrders[mobile].push({
                  Food_name,
                  foodPrice,
                  quantity,
            });
      });

      return (
            <div className="pt-6 mt-10">
                  <div className='mb-10'>
                        <h2 className='mb-10 uppercase text-center font-bold' >User Order </h2>
                        <div className='mb-3 shadow-2xl'>
                              <hr />
                        </div>

                  </div>
                  <ToastContainer />
                  {Object.keys(groupedOrders).map((mobile, index) => (
                        <div key={index} className="">
                              <h2 className='text-center uppercase font-bold mb-2'>Please Order your cart items</h2>
                              <hr />
                              {/* <h2 className="text-xl font-semibold mb-2">Mobile Number: {mobile}</h2> */}
                              <div className="bg-white p-4 rounded shadow-2xl">
                                    <table className="w-full">
                                          <thead>
                                                <tr className="bg-gray-100">
                                                      <th className="border px-4 py-2">Order Name</th>
                                                      <th className="border px-4 py-2">Price</th>
                                                      <th className="border px-4 py-2">Quantity</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {groupedOrders[mobile].map((orderItem, subIndex) => (
                                                      <tr key={subIndex}>
                                                            <td className="border px-4 py-2">{orderItem.Food_name}</td>
                                                            <td className="border px-4 py-2">${orderItem.foodPrice}</td>
                                                            <td className="border px-4 py-2">{orderItem.quantity}</td>
                                                      </tr>
                                                ))}
                                                <tr className="bg-gray-300 font-semibold">
                                                      <td className="border px-4 py-2">Total</td>
                                                      <td className="border px-4 py-2"></td>
                                                      <td className="border px-4 py-2">
                                                            {groupedOrders[mobile].reduce((total, item) => total + item.foodPrice * item.quantity, 0)}
                                                      </td>
                                                </tr>
                                          </tbody>
                                    </table>

                              </div>
                        </div>
                  ))}
                  <button
                        className="btn bg-gray-300 w-full font-bold mt-4"
                        onClick={() => document.getElementById('my_modal_2').showModal()}
                  >
                        Order
                  </button>



                  <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                              <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded shadow-md">
                                    <label className="text-sm">
                                          Enter your Name:
                                          <input
                                                className="border bg-gray-100 py-1 px-4 rounded-md focus:ring focus:ring-blue-300 w-full"
                                                type="text"
                                                {...register('name', { required: true })}
                                                required
                                          />
                                          {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                                    </label>
                                    <label className="text-sm">
                                          Enter your Mobile:
                                          <input
                                                className="border bg-gray-100 py-1 px-4 mb-4 rounded-md focus:ring focus:ring-blue-300 w-full"
                                                type="text"
                                                {...register('mobile', { required: true })}
                                                required
                                          />
                                          {errors.mobile && <span className="text-red-500 text-xs">Mobile is required</span>}
                                    </label>
                                    <div className="mb-4">
                                          <label className="block text-sm font-semibold mb-1">Way To purchase</label>
                                          <select
                                                name="role"
                                                className="w-full border border-gray-300 bg-white text-black focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                                                value={formData}
                                                onChange={handleChange}
                                                required
                                          >

                                                <option disabled selected >Payment Method</option>
                                                <option value="cash" >cash</option>
                                                <option value="paypal" >paypal</option>
                                                {/* <option value="" disabled>Select payment method</option>
              {jobRoles.map((role, index) => (
                <option key={index} value={role}>{role}</option>
              ))} */}
                                          </select>
                                    </div>
                                    <button
                                          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:ring focus:ring-blue-300 w-full"
                                          type="submit"
                                    >
                                          Order Now
                                    </button>
                              </form>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                              <button>close</button>
                        </form>
                  </dialog>

                  <div className="mt-10">
                        <Link to="/">
                              <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:ring focus:ring-blue-300"
                              >
                                    {'<----'} Back
                              </button>
                        </Link>
                  </div>

            </div>
      );
};

export default Userorder;