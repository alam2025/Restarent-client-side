import React, { useState } from 'react';
import { OrderData } from '../../CustomHooks/OrderData/OrderData';

const OrderList = () => {
  const { order, isLoading, error } = OrderData();
  const [expandedOrderId, setExpandedOrderId] = useState(null);

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
console.log(OrderList);
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
                      <button
                        onClick={() => handleActionClick(orderItem.order_id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                      >
                        {expandedOrderId === orderItem.order_id ? 'Close' : 'Way to purchase'}
                      </button>
                    </td>
                  )}
                </tr>
              ))}
              {orders.map((orderItem, itemIndex) => (
                <tr key={itemIndex}>
                  {itemIndex === 0 && (
                    <td
                      rowSpan={orders.length}
                      className={`border px-4 py-2 ${
                        expandedOrderId === orderItem.order_id ? 'block' : 'hidden'
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
    </div>
  );
};

export default OrderList;
