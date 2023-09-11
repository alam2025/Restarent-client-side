import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import category from '../../../assets/category.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
const ShowCategories = () => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            role: '',
          });
      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
      const handleSubmit = async (e) => {
            e.preventDefault();
          }
      return (
            <div>
                  <h1 className="text-2xl text-center font-bold mb-5">Categories</h1>
                  <div className='flex gap-2 items-center md:gap-20  justify-center m-4'>

                        <input
                              type='search'
                              className='py-2 px-10 w-full outline-none rounded-lg  text-black shadow-sm bg-slate-100' // Add border and border-black classes
                              placeholder='Search...'

                        />
                        <button className='btn bg-blue-500 text-white' onClick={() => document.getElementById('my_modal_5').showModal()}>Add Category</button>
                  </div>

                  <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className=' rounded-md border shadow-md bg-gray-100  max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className=' rounded-md border shadow-md bg-gray-100 max-w-xs'>
                              <div className=' flex items-center gap-3 justify-between pr-5'>
                                    <img className=' w-[150px] h-[150px]   rounded-s-md' src={category} alt="" />
                                    <div>
                                          <p>Code : F1201</p>
                                          <h1 className=' text-xl font-semibold'>Desert</h1>
                                          <div className=' flex gap-3 justify-between mt-4'>
                                                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>  <FontAwesomeIcon icon={faEdit} /></button>
                                                <button className='bg-red-500 text-white px-2 py-1 rounded mr-2'> <FontAwesomeIcon icon={faTrash} /></button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>

                  {/* modal  */}
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
                                                            <label className="block text-sm font-semibold mb-1">Category Code</label>
                                                            <input
                                                                  type="text"
                                                                  name="id"
                                                                  className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                                                                  value={formData.name}
                                                                  onChange={handleChange}
                                                                  required
                                                            />
                                                      </div>
                                                      <div className="mb-4">
                                                            <label className="block text-sm font-semibold mb-1">Category Name</label>
                                                            <input
                                                                  type="text"
                                                                  name="name"
                                                                  className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                                                                  value={formData.email}
                                                                  onChange={handleChange}
                                                                  required
                                                            />
                                                      </div>
                                                      <div className="mb-4">
                                                            <label className="block text-sm font-semibold mb-1">Category Image Url</label>
                                                            <input
                                                                  type="text"
                                                                  name="name"
                                                                  className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
                                                                  value={formData.email}
                                                                  onChange={handleChange}
                                                                  required
                                                            />
                                                      </div>

                                                     
                                                      <div className="mt-4">
                                                            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:ring focus:ring-blue-300">
                                                                  Add Category
                                                            </button>
                                                      </div>
                                                </form>
                                          </div>

                                    </div>
                                    <div className="modal-action">
                                          <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm p-2">Cancle</button>
                                                <button className="btn">Add</button>

                                          </form>
                                    </div>
                              </div>
                        </dialog>
                  </section>
            </div>
      );
};

export default ShowCategories;