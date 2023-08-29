import Loader from "../../../Componets/Loader";
import UseReport from "../../../CustomHooks/UseRport/UseReport";
import ReportTable from "./ReportTable";


const Report = () => {
      const { report, isReportLoading } = UseReport()
      if (isReportLoading) return <Loader/>
   
     
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
