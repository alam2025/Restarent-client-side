import Loader from "../../../Componets/Loader";
import MenuData from "../../../CustomHooks/MenuData/MenuData";
import OrderData from "../../../CustomHooks/OrderData/OrderData";
import UseReport from "../../../CustomHooks/UseRport/UseReport";
import ReportTable from "./ReportTable";


const Report = () => {
      const { order } = OrderData();
      const { menu } = MenuData()
      const { report, isReportLoading } = UseReport()
      const totalSales = 1000; // Replace with your actual total sales
      const totalCash = 600; // Replace with your actual total cash
      const totalPayPal = 400;

      if (isReportLoading) return <Loader />


      // Function to get information about food items in an order
      const getFoodInfoFromOrder = (order) => {
            return order.items.map((item) => {
                  const foodId = item.itemID;
                  const quantity = item.quantity;
                  const foodInfo = menu.find((m) => m.id == foodId);

                  if (foodInfo) {
                        return {
                              foodId,
                              quantity,
                              name: foodInfo.name,
                              price: foodInfo.price,
                              category: foodInfo.category,
                              recipe: foodInfo.recipe,
                        };
                  } else {
                        return {
                              foodId,
                              quantity,
                              name: 'Unknown Food',
                              price: 0,
                              category: 'Unknown Category',
                              recipe: 'Unknown Recipe',
                        };
                  }
            });
      };

      // Combine menu and orders data
      const combinedData = order?.map((order) => {
            const orderID = order.orderID;
            const phoneNumber = order.customerPhoneNumber;
            const executionTime = order.executionTime;
            const wayToPurchase = order.wayOfPurchase;
            const orderStatus = order.orderStatus;
            const foodInfo = getFoodInfoFromOrder(order);


            return {
                  orderID,
                  phoneNumber,
                  executionTime,
                  wayToPurchase,
                  orderStatus,
                  foodInfo,
            };
      });


      // cash price 
      let CashPrice = 0;

      function calculateTotalPrice(order) {
            return order.foodInfo.reduce((total, food) => total + (food.quantity * food.price), 0);
      }

      // Calculate total price for each order
      combinedData.forEach(order => {
            if (order.wayToPurchase === 'cash') {
                  const totalPrice = calculateTotalPrice(order);
                  CashPrice += totalPrice;
            }
      });

      


      // paypal price  
      let PaypalPrice = 0;

      function calculateTotalPrice(order) {
            return order.foodInfo.reduce((total, food) => total + (food.quantity * food.price), 0);
      }

      // Calculate total price for each order
      combinedData.forEach(order => {
            if (order.wayToPurchase === 'paypal') {
                  const totalPrice = calculateTotalPrice(order);
                  PaypalPrice += totalPrice;
            }
      });



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
                        <div>
                              <button className=" bg-blue-500 px-5 py-1 rounded-md text-white hover:bg-blue-700">Filter</button>
                        </div>
                  </section>


                  <section className=" flex flex-col justify-center items-center border  max-w-lg mx-auto rounded-md shadow-md py-5 ">
                        <div className="py-4 flex flex-col gap-6 ">
                              <p>Total Cash     :   ${CashPrice}</p>
                              <p>Total Paypal     :   ${PaypalPrice}</p>
                              <p>total sales    :   ${CashPrice + PaypalPrice}</p>

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
