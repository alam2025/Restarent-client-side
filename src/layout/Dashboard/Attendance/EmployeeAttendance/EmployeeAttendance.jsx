import React from 'react';
import EmployeeTable from './EmployeeTable';

const EmployeeAttendance = () => {
      return (
            <div>
                  <div className=' shadow-md px-10 flex py-6 items-center justify-between'>
                        <h1 className=' text-2xl font-bold  '>Today Attendance</h1>

                  </div>
                  <div>
                        <div className="flex items-center justify-center space-x-2 py-4 ">
                              <label className="text-gray-600 flex items-center gap-4 px-6">
                                    <span className=' text-xl font-semibold'> Employee ID</span>
                                    <div className="relative">
                                          <input type="text" className="border border-gray-300 pl-8 pr-2 py-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
                                          placeholder='Enter Employee ID'/>

                                    </div>
                              </label>
                        </div>
                        <div className=' flex justify-around items-center gap-8 shadow-md py-10 border mx-10'>
                              <div>
                                    <h2 className=' text-xl font-bold'>Alam Hossain</h2>
                                    <p>Waiter</p>
                              </div>
                              <div>
                                    <h2 className=' text-xl font-bold'>Employee ID</h2>
                                    <p>e12012</p>
                              </div>
                              <div>
                                    <h2 className=' text-xl font-bold'>Joining Data</h2>
                                    <p>12/23/34</p>
                              </div>
                              <div>
                                    <h2 className=' text-xl font-bold'>08:00</h2>
                                    <p>Average Working Hours</p>
                              </div>
                        </div>
                  </div>

                  {/* employee table 
                   */}

                   <div className='mx-10  border mt-12 rounded-md mb-16'>
                        <EmployeeTable/>
                   </div>
            </div>
      );
};

export default EmployeeAttendance;