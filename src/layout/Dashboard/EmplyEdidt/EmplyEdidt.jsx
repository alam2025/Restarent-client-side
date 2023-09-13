import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllemployData from '../../../CustomHooks/AllemployData/AllemployData';
import useUrl from '../../../CustomHooks/URL/UseUrl';
import { ToastContainer, toast } from 'react-toastify';

const EmplyEdidt = ({id}) => {
  console.log(id)
  const { employee, isLoading, refetch } = AllemployData();

  const [formData, setFormData] = useState({});
  const [employItem, setEmployItem] = useState(null);

  const jobRoles = ['Waiter', 'Cook', 'Server', 'Bartender'];
  const [url] = useUrl();
  useEffect(() => {
    if (!isLoading) {
      const item = employee.find(item => item.id === id);
      if (item) {
        setEmployItem(item);
        setFormData({
          name: item.name,
          email: item.email,
          phone: item.phone,
          role: item.role,
          // Add other fields here
        });
      }
    }
  }, [id, employee, isLoading]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${url}/employee/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json();
      

      if (responseData.updated > 0) {
        toast.success(responseData.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        toast.error(responseData.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.error('Error while sending the request:', error);
      toast.error('Error while sending the request. Please try again later.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full flex justify-center items-center bg-gray-100 ">
      <ToastContainer></ToastContainer>
      <div className="w-full bg-white p-6 rounded shadow-md max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Employee: {id}</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            value={formData.name || ''}
            className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label className="block font-semibold">Email</label>
          <input
            type="text"
            value={formData.email || ''}
            className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <label className="block font-semibold">Phone</label>
          <input
            type="text"
            value={formData.phone || ''}
            className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />

          <label className="block font-semibold">Role</label>
          <select
            value={formData.role || ''}
            className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black"
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="">Select a role</option>
            {jobRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>

          {/* Add more form fields here */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmplyEdidt;
