import UseReport from "../../../CustomHooks/UseRport/UseReport";
import ReportTable from "./ReportTable";


const Report = () => {
      const { report, isReportLoading } = UseReport()
      if (isReportLoading) return <h2>Loading...</h2>
      console.log(report);
      return (
            <div>
                  <div className='shadow-md px-10 flex py-6 items-center justify-between'>
                        <h1 className='text-2xl font-bold'>Today Sales Report</h1>
                  </div>

                  <div>
                        <ReportTable report={report} />
                  </div>
            </div>
      );
};

export default Report;
