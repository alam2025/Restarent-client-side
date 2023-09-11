import Loader from "../../../Componets/Loader";
import UseReport from "../../../CustomHooks/UseRport/UseReport";
import ReportTable from "./ReportTable";


const Report = () => {
      const { report, isReportLoading } = UseReport()
      const totalSales = 1000; // Replace with your actual total sales
      const totalCash = 600; // Replace with your actual total cash
      const totalPayPal = 400;
      if (isReportLoading) return <Loader />


      return (
            <div>


                  <div>
                        <h1 className=" text-center text-2xl font-semibold">Report</h1>


                  </div>

                  <section className="flex justify-center  items-center gap-10 my-8  ">
                        <div className="flex items-center  gap-2 justify-center">

                              <div><p className=" text-lg">Start date:</p></div>
                              <div> <input className=" bg-slate-200 px-5 py-2 rounded-md" type="date"></input></div>
                        </div>
                        <div className="flex items-center  gap-2 justify-center">


                              <div><p className="text-lg">end date:</p></div>
                              <div> <input className="bg-slate-200 px-5 py-2 rounded-md" type="date"></input></div>


                        </div>
                  </section>


                  <section className=" flex flex-col justify-center items-center border  max-w-lg mx-auto rounded-md shadow-md py-5 ">
                        <div className="py-4 flex flex-col gap-6 ">
                              <p>Cash     :   ${totalCash}</p>
                              <p>Paypal     :   ${totalPayPal}</p>
                              <p>total sales    :   ${totalSales}</p>

                        </div>
                        <div className="">
                              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" >
                                    Print
                              </button>
                        </div>
                  </section>
            </div>
      );
};

export default Report;
