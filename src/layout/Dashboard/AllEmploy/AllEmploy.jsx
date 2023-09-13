import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    address: '',
    role: '',
    status: ''
  });

  const jobRoles = ['manager', 'Waiter', 'Kitchen'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${url}/employee`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json();



      if (responseData.Inserted > 0) {

        toast.success(responseData.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",

        });
        // deleteShoppingCart();




      } else {
        toast.error(responseData.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error while sending the order:", error);
      toast.error("Error while sending the order. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  
  return (
    <>
      <div className='w-full p-4'>
        <h1 className="text-2xl text-center font-bold mb-4">All Employees</h1>
        <div className='flex gap-2 items-center justify-center m-4'>
          <button className='btn bg-blue-500 text-white' onClick={() => document.getElementById('my_modal_5').showModal()}>ADD EMPLOYEE</button>
          <input
            type='search'
            className='p-2 rounded-lg bg-white text-black border border-black' // Add border and border-black classes
            placeholder='Search...'
          />
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-col w-full">
            <ToastContainer></ToastContainer>
            <div className="overflow-x-auto w-full">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Id</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Address</th>
                    <th className="border px-4 py-2">Role</th>
                    <th className="border px-4 py-2">PhoneNumber</th>
                    <th className="border px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((emp) => (
                    <tr key={emp.id} className="bg-white">
                      <td className="border px-4 py-2">{emp.id}</td>
                      <td className="border px-4 py-2">{emp.name}</td>
                      <td className="border px-4 py-2">{emp.address}</td>
                      <td className="border px-4 py-2">{emp.jobtitle}</td>
                      <td className="border px-4 py-2">{emp.phone}</td>

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



      <section>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" >open modal</button> */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="flex w-full justify-center items-center   m-3 mx-auto p-4">
              <div className="w-full    p-6 rounded shadow-2xl  ">
                <ToastContainer />
                <h1 className=" mb-4 text-left ">please insert valid information</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Employee Id</label>
                    <input
                      type="number"
                      name="id"
                      className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                      value={formData.id}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Job Role</label>
                    <select
                      name="role"
                      className="w-full border border-gray-300 bg-white text-black focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select Job Role</option>
                      {jobRoles.map((role, index) => (
                        <option key={index} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:ring focus:ring-blue-300">
                      Add Employee
                    </button>
                  </div>
                </form>
              </div>

            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm p-2">Cancel</button>
                
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </>
  );
};

export default AllEmploy;
