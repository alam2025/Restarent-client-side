import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import the edit and delete icons
import AllemployData from '../../../CustomHooks/AllemployData/AllemployData';
import useUrl from '../../../CustomHooks/URL/UseUrl';
import Loader from '../../../Componets/Loader';

const AllEmploy = () => {
  const [url] = useUrl();
  const { employee, isLoading, refetch } = AllemployData();

  const onDelete = async (id) => {
    // ... Your delete logic here ...
  };

  return (
    <div className='w-full p-4'>
      <h1 className="text-2xl text-center font-bold mb-4">All Employees</h1>
      {isLoading ? (
        <Loader />
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
                {employee.map((emp) => (
                  <tr key={emp.id} className="bg-white">
                    <td className="border px-4 py-2">{emp.name}</td>
                    <td className="border px-4 py-2">{emp.email}</td>
                    <td className="border px-4 py-2">{emp.phone}</td>
                    <td className="border px-4 py-2">{emp.role}</td>
                    <td className="border px-4 py-2">
                      <Link to={`/dashboard/emplyedit/${emp.id}`}>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </Link>
                      <button
                        className="btn bg-slate-200 shadow-2xl text-red-500 hover:text-red-700 ml-2"
                        onClick={() => onDelete(emp.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} /> 
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
