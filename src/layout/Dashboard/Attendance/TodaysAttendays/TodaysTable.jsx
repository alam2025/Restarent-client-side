import React from 'react';
import DataTable from 'react-data-table-component';
import userTodayAttendance from '../../../../CustomHooks/TodayAttendance';

const TodaysTable = () => {
      const [todayAttendance,isTodayAttendance]= userTodayAttendance();
      if(isTodayAttendance)return <h2>Loading ...</h2>
     

      const indexedData = todayAttendance.map((row, index) => ({ ...row, index: index + 1 }));
      const columns = [
            {
                  name: 'SI NO.',
                  selector: row => row.index,
                  sortable: true,
            },
            {
                  name: 'ID',
                  selector: row => row.id,
                  sortable: true,
            },
            {
                  name: 'Name',
                  selector: row => row.name,
                  sortable: true,
            },
            {
                  name: 'Date',
                  selector: row => row.first_in.split("T")[0],
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