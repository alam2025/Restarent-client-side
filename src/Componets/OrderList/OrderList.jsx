import React, { useState } from 'react';
import { OrderData } from '../../CustomHooks/OrderData/OrderData';

const OrderList = () => {
  const { order, isLoading, error } = OrderData();
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [buttonText, setButtontext] = useState('Cash')
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Group orders by mobile number
  const groupedOrders = order.reduce((result, orderItem) => {
    const mobile = orderItem.mobile;
    if (!result[mobile]) {
      result[mobile] = [];
    }
    result[mobile].push(orderItem);
    return result;
  }, {});

  const handleActionClick = (orderId) => {
    // Toggle collapse state
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null);
    } else {
      setExpandedOrderId(orderId);
    }
  };

  const handleOnlinePayment = (orderId) => {
    // Handle online payment logic
    console.log(`Initiating online payment for order: ${orderId}`);
  };

  const handleCashPayment = (orderId) => {
    // Handle cash payment logic
    console.log(`Accepting cash payment for order: ${orderId}`);
  };
  const handleClickCash = async (text, order_id) => {
    console.log(text, order_id);

    try {
      // Make an API call to update the button text based on order ID
      const response = await fetch(`your-backend-api-url/updateButtonText/${order_id}`, {
        method: 'PUT', // or 'POST' or 'PATCH' depending on your backend API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buttonText: text }),
      });

      if (response.ok) {
        // Update the button text with the data from the backend
        setButtontext(text);
        console.log('Button text updated successfully');
      } else {
        console.error('Failed to update button text');
      }
    } catch (error) {
      console.error('Error updating button text:', error);
    }

  };
  console.log(order);
  return (
    <div className="p-6 w-full text-black">
      <h1 className="font-bold text-2xl p-3 text-center">Order List</h1>
      <hr />
      <br></br>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Mobile Number</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Food ID</th>
            <th className="border px-4 py-2">Food Name</th>
            <th className="border px-4 py-2">Food Price</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Total Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedOrders).map(([mobile, orders], index) => (
            <React.Fragment key={index}>
              {orders.map((orderItem, itemIndex) => (
                <tr key={itemIndex}>
                  {itemIndex === 0 && (
                    <React.Fragment>
                      <td rowSpan={orders.length} className="border px-4 py-2">
                        {mobile}
                      </td>
                      <td rowSpan={orders.length} className="border px-4 py-2">
                        {orderItem.name}
                      </td>
                    </React.Fragment>
                  )}
                  <td className="border px-4 py-2">{orderItem.order_id}</td>
                  <td className="border px-4 py-2"><ul>

                    {orderItem.items[0].food_id}


                  </ul>

                  </td>
                  <td className="border px-4 py-2">{orderItem.items[0].food_name}</td>
                  <td className="border px-4 py-2">{orderItem.items[0].food_price}</td>
                  <td className="border px-4 py-2">{orderItem.items[0].quantity}</td>
                  {itemIndex === 0 && (
                    <td rowSpan={orders.length} className="border px-4 py-2">
                      {orders.reduce((total, orderItem) => total + orderItem.total, 0)}
                    </td>
                  )}
                  {itemIndex === 0 && (
                    <td rowSpan={orders.length} className="border px-4 py-2">
                      {orderItem.waytopayment == 'paypal' ? <button onClick={() => window.my_modal_1.showModal()} className='btn btn-sm shadow-2xl bg-yellow-50 hover:scale-50'>Paypal</button> : <button className='btn btn-sm shadow-2xl bg-yellow-50 hover:scale-50' onClick={() => handleClickCash('Close', orderItem.order_id)}>
                        {buttonText}
                      </button>}
                    </td>
                  )}
                </tr>
              ))}
              {orders.map((orderItem, itemIndex) => (
                <tr key={itemIndex}>
                  {itemIndex === 0 && (
                    <td
                      rowSpan={orders.length}
                      className={`border px-4 py-2 ${expandedOrderId === orderItem.order_id ? 'block' : 'hidden'
                        }`}
                    >
                      <button
                        onClick={() => handleOnlinePayment(orderItem.order_id)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2"
                      >
                        Credit
                      </button>
                      <button
                        onClick={() => handleCashPayment(orderItem.order_id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                      >
                        Cash
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>

          <label htmlFor="customerName" className="block mb-2">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className="border rounded px-2 py-1 w-full mb-4"
            required
          />

          <label htmlFor="phoneNumber" className="block mb-2">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="border rounded px-2 py-1 w-full mb-4"
            required
          />

          <div className="modal-action">
            <button className="btn btn-sm font-bold uppercase bg-red-600 text-white">X</button>
          </div>
        </form>
      </dialog>

    </div>
  );
};

export default OrderList;
