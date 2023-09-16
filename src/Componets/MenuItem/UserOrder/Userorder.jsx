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

      const handleIncrement = () => {
            setQuantity(prevQuantity => prevQuantity + 1);
      };

      const handleDecrement = (foodId) => {

            if (quantity > 1) {
                  setQuantity(prevQuantity => prevQuantity - 1);
            }
      };

    
     
      const handleChange = (e) => {
            const { name, value } = e.target;
            // setFormData((prevData) => ({ ...prevData, [name]: value }));
            console.log(e.target.value)
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
            console.log(formData)
            const orderItem = {
                  name: data.name,
                  mobile: data.mobile,
                  orderdata_array: orderdata,
                  total: total,
                  wayToPayment: formData,

            };

            console.log(orderItem)

            // try {
            //       const res = await fetch(`${url}/orderItem`, {
            //             method: 'POST',
            //             headers: {
            //                   'Content-Type': 'application/json',
            //             },
            //             body: JSON.stringify(orderItem),
            //       });

            //       const responseData = await res.json();



            //       if (responseData.InsertedId > 0) {
            //             reset()
            //             toast.success(responseData.message, {
            //                   position: "top-right",
            //                   autoClose: 5000,
            //                   hideProgressBar: false,
            //                   closeOnClick: true,
            //                   pauseOnHover: true,
            //                   draggable: true,
            //                   progress: undefined,
            //                   theme: "light",

            //             });
            //             deleteShoppingCart();





            //       } else {
            //             toast.error(responseData.message, {
            //                   position: "top-right",
            //                   autoClose: 5000,
            //                   hideProgressBar: false,
            //                   closeOnClick: true,
            //                   pauseOnHover: true,
            //                   draggable: true,
            //                   progress: undefined,
            //                   theme: "light",
            //             });
            //       }
            // } catch (error) {
            //       console.error("Error while sending the order:", error);
            //       toast.error("Error while sending the order. Please try again later.", {
            //             position: "top-right",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //             theme: "light",
            //       });
            // }
      };
      // Group the order data by phone number
      orderdata.forEach(orderItem => {

            const { Food_name, foodPrice, foodId, mobile } = orderItem;
            if (!groupedOrders[mobile]) {
                  groupedOrders[mobile] = [];
            }
            groupedOrders[mobile].push({
                  foodId,
                  Food_name,
                  foodPrice,
                  quantity: 3,
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
                        <div key={index} className="mb-8">
                              <h2 className="text-center uppercase font-bold text-lg mt-4 mb-2">Please Order Your Cart Items</h2>
                              <hr className="border-gray-400" />
                              <div className="bg-white p-4 rounded shadow-lg">
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
                                                            <td className="border px-4 py-2">
                                                                  <div className="flex items-center space-x-4">
                                                                        <button
                                                                              type="button"
                                                                              onClick={()=>handleDecrement(orderItem.foodId)}
                                                                              className="bg-slate-100 text-gray-600 py-1 px-2 rounded-md hover:bg-slate-200 hover:text-gray-800 transition-colors"
                                                                        >
                                                                              -
                                                                        </button>
                                                                        <input
                                                                              className="border bg-slate-100 text-center py-1 px-2 rounded-md w-12"
                                                                              type="number"
                                                                              value={quantity}
                                                                              readOnly
                                                                        />
                                                                        <button
                                                                              type="button"
                                                                              onClick={handleIncrement}
                                                                              className="bg-slate-100 text-gray-600 py-1 px-2 rounded-md hover:bg-slate-200 hover:text-gray-800 transition-colors"
                                                                        >
                                                                              +
                                                                        </button>
                                                                  </div>
                                                            </td>
                                                      </tr>
                                                ))}
                                                <tr className="bg-gray-300 font-semibold">
                                                      <td className="border px-4 py-2">Total</td>
                                                      <td className="border px-4 py-2"></td>
                                                      <td className="border px-4 py-2">
                                                            ${groupedOrders[mobile].reduce((total, item) => total + item.foodPrice * item.quantity, 0)}
                                                      </td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>
                              <button
                                    className="btn bg-gray-300 w-full font-bold mt-4"
                                    onClick={() => document.getElementById('my_modal_2').showModal()}
                              >
                                    Order
                              </button>
                        </div>
                  ))}



                  <div className="mt-10">
                        <Link to="/">
                              <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:ring focus:ring-blue-300"
                              >
                                    {'<----'} Back
                              </button>
                        </Link>
                  </div>



                  <>

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

                  </>

            </div>
      );
};

export default Userorder;
