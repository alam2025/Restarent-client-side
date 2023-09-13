import React from 'react';

import StackBarChart from '../Stackbarchart/StackBarChart';
import Loader from '../../../Componets/Loader';
import OrderData from '../../../CustomHooks/OrderData/OrderData';

const Statistics = () => {
  const { order, isLoading } = OrderData();

  if (isLoading) {
    return <Loader />
  }



  // Calculate statistics
  const totalCustomer = new Set(order.map(item => item.name)).size;
  const totalQuantity = order.reduce((acc, item) => acc + item.items[0].quantity, 0);
  const totalPrice = order.reduce((acc, item) => acc + item.total, 0); // Using the 'total' field

  // Prepare data for the stacked bar chart
  const categoryData = {}; // Example: { "Category1": 100, "Category2": 200, ... }
  order.forEach(item => {
    const category = item.items[0].foodCategory || "Uncategorized"; // Using 'foodCategory'
    if (!categoryData[category]) {
      categoryData[category] = 0;
    }
    categoryData[category] += item.items[0].food_price * item.items[0].quantity;
  });

  const categoryChartData = Object.entries(categoryData).map(([category, totalPrice]) => ({
    category,
    totalPrice
  }));
  const categories = [
    {
      name: 'Category 1',
      items: [
        {
          id: 1,
          name: 'Item 1',
          image: 'https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg',
        },
        {
          id: 2,
          name: 'Item 2',
          image: 'https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-3-370x247.jpg',
        },
        {
          id: 3,
          name: 'Item 3',
          image: 'https://www.homewetbar.com/blog/wp-content/uploads/2015/05/refreshing-summer-cocktails.jpg',
        },
        {
          id: 3,
          name: 'Item 3',
          image: 'https://www.homewetbar.com/blog/wp-content/uploads/2015/05/refreshing-summer-cocktails.jpg',
        },
        // Add more items for Category 1
      ]
    }

    // Add more categories as needed
  ];
  console.log(order)
  return (
    <div className="p-8 text-center w-[100%] mb-3 mx-auto">
      <h1 className="text-center font-bold uppercase text-2xl">Statistics</h1>
      <hr className="my-4" />
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-2xl">
          <h2 className="text-xl font-semibold mb-2">Total Customer</h2>
          <p className="text-2xl">{totalCustomer}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-2xl">
          <h2 className="text-xl font-semibold mb-2">Total Quantity</h2>
          <p className="text-2xl">{totalQuantity}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-2xl">
          <h2 className="text-xl font-semibold mb-2">Total Price</h2>
          <p className="text-2xl">${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <section className="mt-5">
        <StackBarChart />
      </section>


      <section className='m-4 w-[95%] mx-auto'>
        <h1>Most sold items of this months</h1>

        <div className=" py-6">
          {categories.map((category) => (
            <div key={category.name} className="mb-8">
              {/* <h2 className="text-xl font-semibold mb-4">{category.name}</h2> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
                {category.items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      {/* Add more item details here */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Statistics;
