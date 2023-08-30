import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AllemployData from '../../../CustomHooks/AllemployData/AllemployData';
import useEmployee from '../../../CustomHooks/useEmployee';
import useUrl from '../../../CustomHooks/URL/UseUrl';
import Loader from '../../../Componets/Loader';

const AllEmploy = () => {
 const [url]=useUrl()
  // const { employee, isLoading, refetch } = AllemployData();
  const {employee,isLoading,refetch}= AllemployData();
 if(isLoading){
  return <Loader/>
 }

  const onDelete = async (id) => {
     
      try {
        const res = await fetch(`${url}/employee/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        const responseData = await res.json();
        console.log(responseData);
    
        if (responseData.deleted > 0) {
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
    
          // You may want to refetch the employee data after successful deletion
          refetch();
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
    

  return (
    <div className='w-full p-4'>
       <h1 className="text-2xl text-center font-bold mb-4">All Menu Items</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col w-full">
            <ToastContainer></ToastContainer>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Phone</th>
                  <th className="border px-4 py-2">Role</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employee.map(emp => (
                  <tr key={emp.id} className="bg-white">
                    <td className="border px-4 py-2">{emp.name}</td>
                    <td className="border px-4 py-2">{emp.email}</td>
                    <td className="border px-4 py-2">{emp.phone}</td>
                    <td className="border px-4 py-2">{emp.role}</td>
                    <td className="border px-4 py-2">
                    <Link to={`/dashboard/emplyedit/${emp.id}`}>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    Edit
                  </button>
                </Link>
                      <button
                        className="btn bg-slate-200 shadow-2xl text-red-500 hover:text-red-700 ml-2"
                        onClick={() => onDelete(emp.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEmploy;
