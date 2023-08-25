import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { OrderData } from '../../../CustomHooks/OrderData/OrderData';

const StackBarChart = () => {
  const { order } = OrderData();

  // Prepare data for the stacked bar chart
  const categoryData = {}; // Example: { "Category1": 100, "Category2": 200, ... }
  order.forEach(orderItem => {
    orderItem.items.forEach(item => {
      const category = item.foodCategory || "Uncategorized";
      if (!categoryData[category]) {
        categoryData[category] = 0;
      }
      categoryData[category] += item.food_price * item.quantity;
    });
  });

  const categoryChartData = Object.entries(categoryData).map(([category, totalPrice]) => ({
    foodCategory: category,
    totalPrice: totalPrice
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={categoryChartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="foodCategory" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPrice" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackBarChart;