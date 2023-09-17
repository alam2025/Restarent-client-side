import React from 'react';
import useUrl from '../../CustomHooks/URL/UseUrl';
import { ToastContainer, toast } from 'react-toastify';
import OrderData from '../../CustomHooks/OrderData/OrderData';

const OrderTab = ({ order, index }) => {
      const [url] = useUrl()
      const { isLoading, refetch } = OrderData();

      const handleOrder = async (order) => {
            const id = order?.order_id


            if (order?.waytopayment == 'cash') {
                  try {
                        // Make an API call to update the button text based on order ID
                        const response = await fetch(`${url}/orders/${id}`, {
                              method: 'PATCH', // or 'POST' or 'PATCH' depending on your backend API
                              headers: {
                                    'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({ buttonText: "Close" }),
                        });
                        const responseData = await response.json()

                        if (responseData.updated) {
                              // Update the button text with the data from the backend

                              refetch()
                              toast.success(responseData.message, {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",

                              });
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
                        console.error('Error updating button text:', error);
                  }
            }
            else {
                  console.log(id);
            }
      }
      return (
            <>

                  <tr>

                        <td>
                              <ToastContainer />
                              {index + 1}
                        </td>
                        <td>
                              {order?.order_id}
                        </td>
                        <td>
                              <div className="flex items-center space-x-3">
                                    {order?.name}
                              </div>
                        </td>
                        <td>
                              {order?.mobile}
                        </td>
                        <td>
                              {
                                    order?.items?.map((item, index) => <div key={index}>{item?.food_id}</div>)
                              }
                        </td>
                        <td>
                              {
                                    order?.items?.map((item, index) => <div key={index}>{item?.food_name}</div>)
                              }
                        </td>
                        <td>
                              {
                                    order?.items?.map((item, index) => <div key={index}>{item?.quantity}</div>)
                              }
                        </td>
                        <td>
                              ${order?.total}
                        </td>
                        <td>
                              {
                                    order?.waytopayment == 'cash' ?
                                          <button onClick={() => handleOrder(order)} className={`btn btn-ghost btn-xs ${order?.status == 'Close' && ' text-red-500 '}`}> {order?.status}</button>
                                          :
                                          <button className="btn btn-xs btn-ghost" onClick={() => document.getElementById('my_modal_5').showModal()}>Pay</button>

                              }



                        </td>
                  </tr>



                  {/* modal  */}
                  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                              <h3 className="font-bold text-lg">Paypal Payment</h3>

                              <div className="modal-action">
                                    <form method="dialog">
                                         
                                                <div className="mb-4">
                                                      <label className="block text-sm font-semibold mb-1">Email Address</label>
                                                      <input type="text" className="w-full border  border-gray-300 px-3 py-2 rounded"  />
                                                  
                                                </div>
                                                <div className="mb-4">
                                                      <label className="block text-sm font-semibold mb-1">Password</label>
                                                      <input type="text" className="w-full border  border-gray-300 px-3 py-2 rounded"  />
                                                      
                                                </div>
                                                <button className=' btn btn-info'>Submit</button>
                                          

                                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                              </div>
                        </div>
                  </dialog>
            </>
      );
};

export default OrderTab;