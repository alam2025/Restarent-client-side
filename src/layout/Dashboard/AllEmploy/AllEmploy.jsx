import React from 'react';
import AllemployData from '../../../CustomHooks/AllemployData/AllemployData';
import { Link, NavLink } from 'react-router-dom';

const AllEmploy = () => {
  const { employee, isLoading, refetch } = AllemployData();
  console.log(employee);

  const onDelete = (id) => {
    // Implement your delete logic here
  };

  return (
    <div className='w-full p-4'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col w-full">
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
