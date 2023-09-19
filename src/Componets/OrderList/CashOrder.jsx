import React, { useState } from 'react';

import Loader from '../Loader';
import useUrl from '../../CustomHooks/URL/UseUrl';
import OrderData from '../../CustomHooks/OrderData/OrderData';
import { ToastContainer, toast } from 'react-toastify';
import OrderTab from './OrderTab';
const CashOrder = () => {
      const [url] = useUrl()
      const { order, isLoading, refetch } = OrderData();
      const [expandedOrderId, setExpandedOrderId] = useState(null);
      const [buttonText, setButtontext] = useState('Cash')
      if (isLoading) {
            return <Loader />
      }



      // Filter objects with 'waytopayment' equal to 'cash' and 'status' equal to 'open'
      const filteredOrders = order.filter((order) => order.waytopayment === 'cash' && order.status === 'Open');

      // Filter objects with 'waytopayment' equal to 'cash' and 'status' equal to 'close'
      const closedOrders = order.filter((order) => order.waytopayment === 'cash' && order.status === 'Close');

      // Concatenate the two arrays to have 'open' orders at the top
      const orderedOrders = [...filteredOrders, ...closedOrders];




      return (
            <div className="p-6 w-full text-black">

                  <ToastContainer />
                  <h1 className="font-bold text-2xl p-3 text-center">Order List of Cash Payment</h1>
                  <hr />
                  <br></br>

                  {/* <table></table> */}
                  <div>
                        <div className="overflow-x-auto">
                              <table className="table table-xs table-zebra">
                                    {/* head */}
                                    <thead>
                                          <tr>
                                                <th>
                                                      SI. No.
                                                </th>
                                                <th>
                                                      Order Id
                                                </th>
                                                <th>Customer Name</th>
                                                <th>Mobile</th>
                                                <th>Food Id</th>
                                                <th>Food Items</th>
                                                <th>Quantity</th>
                                                <th>total Amount</th>
                                                <th>Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {/* row 1 */}
                                          {
                                                orderedOrders?.map((order, index) => <OrderTab index={index} key={index} order={order} />)
                                          }

                                    </tbody>
                                    {/* foot */}
                                    <tfoot>
                                          <tr>
                                                <th>
                                                      SI.No.
                                                </th>
                                                <th>
                                                      Order Id
                                                </th>
                                                <th>Customer Name</th>
                                                <th>Mobile</th>
                                                <th>Food Id</th>
                                                <th>Food Items</th>
                                                <th>Quantity</th>
                                                <th>total Amount</th>
                                                <th>Action</th>
                                          </tr>
                                    </tfoot>

                              </table>
                        </div>
                  </div>



            </div>
      );
};

export default CashOrder;