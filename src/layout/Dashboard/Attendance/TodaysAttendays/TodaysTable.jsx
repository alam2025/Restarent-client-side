import React from 'react';
import DataTable from 'react-data-table-component';
import userTodayAttendance from '../../../../CustomHooks/TodayAttendance';
import Loader from '../../../../Componets/Loader';

const TodaysTable = () => {
      const [todayAttendance,isTodayAttendance]= userTodayAttendance();
      if(isTodayAttendance)return <Loader/>
     
      console.log(todayAttendance);

      const indexedData = todayAttendance.map((row, index) => ({ ...row, index: index + 1 }));
      const columns = [
            {
                  name: 'SI NO.',
                  selector: row => row.index,
                  sortable: true,
            },
            {
                  name: 'ID',
                  selector: row => row.attendanceId,
                  sortable: true,
            },
           
            {
                  name: 'Entry Hour',
                  selector: row => row.entryTime,
                  sortable: true,
            },
            {
                  name: 'Entry Date',
                  selector: row => row.entryDate,
                  sortable: true,
            },
            {
                  name: 'Exit Hour',
                  selector: row => row.exitTime,
                  sortable: true,
            },
            {
                  name: 'Exit Date',
                  selector: row => row.exitDate,
                  sortable: true,
            },
           
            {
                  name: 'Status',
                  selector: row => <p className=' text-green-500'>{row.status}</p>,
                  sortable: true,
            },
      ];

     
      return (
            <div>
                  <DataTable
                        columns={columns}
                        data={indexedData}
                        
                        pagination
                  />
            </div>
      );
};

export default TodaysTable;