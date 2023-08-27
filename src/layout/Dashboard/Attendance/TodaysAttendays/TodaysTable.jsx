import React from 'react';
import DataTable from 'react-data-table-component';

const TodaysTable = () => {
      const columns = [
            {
                  name: 'Name',
                  selector: row => row.Name,
                  sortable: true,
            },
            {
                  name: 'First_In',
                  selector: row => row.First_In,
                  sortable: true,
            },
            {
                  name: 'Last_out',
                  selector: row => row.Last_out,
                  sortable: true,
            },
            {
                  name: 'Total',
                  selector: row => row.Total,
                  sortable: true,
            },
            {
                  name: 'Status',
                  selector: row => row.Status,
                  sortable: true,
            },
      ];

      const data = [
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
            {
                  Name: 1,
                  First_In: 'Beetlejuice',
                  Last_out: '1988',
                  Total:12,
                  Status:"Present"
            },
           
      ]
      return (
            <div>
                  <DataTable
                        columns={columns}
                        data={data}
                        selectableRows
                        pagination
                  />
            </div>
      );
};

export default TodaysTable;