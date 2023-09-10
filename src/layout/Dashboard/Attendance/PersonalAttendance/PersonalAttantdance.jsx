import React, { useState } from 'react';

const PersonalAttendance = () => {
  // Initialize state for entry and exit hours and dates
  const [entryHour, setEntryHour] = useState('');
  const [exitHour, setExitHour] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [exitDate, setExitDate] = useState('');

  // Function to calculate hours
  const calculateHours = () => {
    // Calculate the hours based on entry and exit times
    // You can implement your own logic here
    // For simplicity, let's assume they are in HH:MM format
    const entryTime = new Date(`2000-01-01T${entryHour}`);
    const exitTime = new Date(`2000-01-01T${exitHour}`);
    const timeDifference = Math.abs(exitTime - entryTime) / 36e5; // Calculate hours

    return isNaN(timeDifference) ? 'Invalid input' : timeDifference.toFixed(2);
  };

  return (
    <div>
      <h1 className='font-bold text-center m-4 underline'>Personal Attendance</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2">Entry Hour</th>
              <th className="py-2">Exit Hour</th>
              <th className="py-2">Entry Date</th>
              <th className="py-2">Exit Date</th>
              <th className="py-2">Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={entryHour}
                  onChange={(e) => setEntryHour(e.target.value)}
                  className="text-white border p-2 rounded"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={exitHour}
                  onChange={(e) => setExitHour(e.target.value)}
                  className="text-white border p-2 rounded"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={entryDate}
                  onChange={(e) => setEntryDate(e.target.value)}
                  className="text-white border p-2 rounded"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={exitDate}
                  onChange={(e) => setExitDate(e.target.value)}
                  className="text-white border p-2 rounded"
                />
              </td>
              <td>{calculateHours()} hours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalAttendance;
