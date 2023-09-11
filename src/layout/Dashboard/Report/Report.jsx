import Loader from "../../../Componets/Loader";
import UseReport from "../../../CustomHooks/UseRport/UseReport";
import ReportTable from "./ReportTable";


const Report = () => {
      const { report, isReportLoading } = UseReport()
      const totalSales = 1000; // Replace with your actual total sales
      const totalCash = 600; // Replace with your actual total cash
      const totalPayPal = 400;
      if (isReportLoading) return <Loader/>
   
     
      return (
            <div>
                

                  <div>
                        {/* <ReportTable report={report} /> */}


                  </div>

                  <section className="flex justify-between  items-center gap-3 ">
                        <div className="flex items-center  gap-2 justify-center">

                              <div><p>Start date:</p></div>
                              <div> <input type="date"></input></div>
                        </div>
                        <div className="flex items-center  gap-2 justify-center">

                         
                        <div><p>end date:</p></div>
                              <div> <input type="date"></input></div>


                        </div>
                  </section>
                  <div className="flex justify-end mt-80">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Filter</button>
                  </div>

                  <section className="">
                  <div className="py-4 text-left">
        <p className="text-2xl font-bold ">Total Cash: <span className="underline">${totalCash}</span> </p>
        <p className="text-2xl font-bold ">Total PayPal:  <span className="underline">${totalPayPal}</span></p>
        <p className="text-2xl font-bold " >Tota  Sales: <span className="underline">${totalSales}</span></p>
     <div className="flex justify-end ">
     <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" >
          Print
        </button>
     </div>
      </div>
                  </section>
            </div>
      );
};

export default Report;
