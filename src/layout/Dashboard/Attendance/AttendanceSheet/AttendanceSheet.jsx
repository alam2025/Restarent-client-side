import React from 'react';
import AttendanceSheetTable from './AttendanceSheetTable';

const AttendanceSheet = () => {
      return (
            <div>
                  <div className=' shadow-md px-10 flex py-6 items-center justify-between'>
                        <h1 className=' text-2xl font-bold  '>Attendance Sheet</h1>

                  </div>

                  <div>
                        <form className="flex items-center space-x-2 py-4 ">
                              <div>
                                    <label className="text-gray-600 flex flex-col gap-4 px-6">
                                          <span>Choose Start Date</span>

                                          <div className="relative">
                                                <input type="date" className="border border-gray-300 pl-8 pr-2 py-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
                                                placeholder='Choose Start date'/>

                                          </div>
                                    </label>
                              </div>
                              <div>
                                    <label className="text-gray-600 px-6 flex gap-4 flex-col">
                                    <span>Choose Start Date</span>
                                          <div className="relative">
                                                <input type="date" className="border border-gray-300 pl-8 pr-2 py-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300 "
                                                placeholder='Choose end date' />

                                          </div>
                                    </label>
                              </div>
                              <div>
                                    <button className=' btn btn-info px-10 mt-10'>Search</button>
                              </div>
                        </form>
                  </div>

                  <div className=' mx-10'>
                        <AttendanceSheetTable/>
                  </div>
            </div>
      );
};

export default AttendanceSheet;