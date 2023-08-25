import React, { useState } from 'react';
import MenuData  from '../../../CustomHooks/MenuData/MenuData';
import { Link } from 'react-router-dom';

const Allmenu = () => {
  const { menu } = MenuData();
  const categories = [...new Set(menu.map(item => item.category))];

  const [selectedCategory, setSelectedCategory] = useState('salad');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (item) => {
    console.log('Delete item:', item.id);
  };

  const filteredMenu = menu.filter(item =>
    item.category === selectedCategory &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Menu Items</h1>
      <div className="mb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`mr-2 px-3 py-1 rounded border ${selectedCategory === category ? 'bg-blue-500 text-white border-blue-500' : ''
              }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mb-4">
        <h1 className='font-bold uppercase'>Search:(Search by food name)</h1>
        <input
          type="text"
          placeholder="Search by food name "
          className="border p-4 w-full bg-orange-2d00 rounded-2xl shadow-2xl text-white"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Recipe</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMenu.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.category}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">${item.price.toFixed(2)}</td>
              <td className="border p-2">
                <img src={item.image} alt={item.name} className="h-16" />
              </td>
              <td className="border p-2">{item.recipe}</td>
              <td className="border p-2">
                <Link to={`/dashboard/edit/${item.id}`}>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    Edit
                  </button>
                </Link>


                <button onClick={() => handleDelete(item)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allmenu;
