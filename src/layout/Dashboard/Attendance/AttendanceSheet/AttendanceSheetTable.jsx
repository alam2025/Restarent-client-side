import React from 'react';
import DataTable from 'react-data-table-component';

const AttendanceSheetTable = () => {

      const column = [

            {
                  name: 'ID',
                  selector: row => row.ID,
                  sortable: true,
            },
            {
                  name: 'Name',
                  selector: row => row.Name,
                  sortable: true,
            },
            {
                  name: '1',
                  selector: row => row.one,
                  sortable: true,
            },
            {
                  name: '2',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '3',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '4',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '5',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '6',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '7',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '8',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '9',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '10',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '11',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '12',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '13',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '14',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '15',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '16',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '17',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '18',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '6',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '19',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '20',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '21',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '23',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '24',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '25',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '26',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '27',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '28',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '29',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '30',
                  selector: row => row.two,
                  sortable: true,
            },
            {
                  name: '31',
                  selector: row => row.two,
                  sortable: true,
            },

      ]
      const data = [
            {
                  ID: 1,
                  Name: "Alam",
                  one: 1,
                  two: 2,
                 
            },
            {
                  ID: 1,
                  Name: "Alam",
                  one: 1,
                  two: 2,
                 
            },
            {
                  ID: 1,
                  Name: "Alam",
                  one: 1,
                  two: 2,
                 
            }
      ]
      return (
            <div className="flex flex-col w-[50%]">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <DataTable
                                          columns={column}
                                          data={data}
                                          pagination
                                    />
                              </div>
                        </div>
                  </div>
            </div>

      );
};

export default AttendanceSheetTable;