import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../HOme/Home/Home/Home";
import OrderList from "../Componets/OrderList/OrderList";
import Userorder from "../Componets/MenuItem/UserOrder/Userorder";
import Dashboard from "../layout/Dashboard/Dashboard";
import Statistics from "../layout/Dashboard/Statistics/Statistics";
import AddMenu from "../layout/Dashboard/Addmenu/AddMenu";
import AddEmploy from "../layout/Dashboard/Addemploy/AddEmploy";
import Allmenu from "../layout/Dashboard/Allmenu/Allmenu";
import Editmenu from "../layout/Dashboard/EditMenu/Editmenu";
import AllEmploy from "../layout/Dashboard/AllEmploy/AllEmploy";
import EmplyEdidt from "../layout/Dashboard/EmplyEdidt/EmplyEdidt";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/order',
        element: <Userorder />
      },
    ],
  },

  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '', // Empty path for the default child route
        element: <Statistics />
      },
      {
        path: 'allorder',
        element: <OrderList />
      },
      {
        path: 'allmenu',
        element: <Allmenu />
      },
      {
        path: 'addmenu',
        element: <AddMenu/>
      },
      {
        path: 'addemploy',
        element: <AddEmploy/>
      },
      {
        path: 'edit/:id',
        element: <Editmenu/>
      },
      {
        path: 'emplyedit/:id',
        element: <EmplyEdidt/>
      },
      
      {
        path: 'allemploy',
        element: <AllEmploy/>
       
      },
      
      {
        path: 'statistics',
        element: <Statistics />
      }
    ],
  }

]);

export default router;
