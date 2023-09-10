import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../HOme/Home/Home/Home";
import OrderList from "../Componets/OrderList/OrderList";
import Userorder from "../Componets/MenuItem/UserOrder/Userorder";

import Statistics from "../layout/Dashboard/Statistics/Statistics";
import AddMenu from "../layout/Dashboard/Addmenu/AddMenu";
import AddEmploy from "../layout/Dashboard/Addemploy/AddEmploy";
import Allmenu from "../layout/Dashboard/Allmenu/Allmenu";
import Editmenu from "../layout/Dashboard/EditMenu/Editmenu";
import AllEmploy from "../layout/Dashboard/AllEmploy/AllEmploy";
import EmplyEdidt from "../layout/Dashboard/EmplyEdidt/EmplyEdidt";
import TodaysAttendance from "../layout/Dashboard/Attendance/TodaysAttendays/TodaysAttendance";
import EmployeeAttendance from "../layout/Dashboard/Attendance/EmployeeAttendance/EmployeeAttendance";

import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "../Componets/SecureRoutes/AdminRoute/AdminRoute";
import Report from "../layout/Dashboard/Report/Report";
import Dashboard2 from "../layout/Dashboard/Dashboard2";
import DashboardApp from "../layout/Dashboard/DashboardApp/DashboardApp";
import DashboardHome from "../layout/Dashboard/DashboardHome/DashboardHome";




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
    path:'login',
    element:<Login/>
  },

  {
    path: "/dashboardapp",
    element: <DashboardApp/>,
    children: [
      {
        path: '/dashboardapp', // Empty path for the default child route
        element: <DashboardHome />
      },
      {
        path: 'allorder',
        element: <OrderList />
      },
      {
        path: 'allmenu',
        element: <AdminRoute><Allmenu /></AdminRoute>
      },
      {
        path: 'addmenu',
        element: <AdminRoute><AddMenu/></AdminRoute>
      },
      {
        path: 'addemploy',
        element:<AdminRoute> <AddEmploy/></AdminRoute>
      },
      {
        path: 'edit/:id',
        element:<AdminRoute> <Editmenu/></AdminRoute>
      },
      {
        path: 'emplyedit/:id',
        element: <AdminRoute><EmplyEdidt/></AdminRoute>
      },
      
      {
        path: 'allemploy',
        element:<AdminRoute> <AllEmploy/></AdminRoute>
       
      },
      
      {
        path: 'statistics',
        element: <PrivateRoute><Statistics /></PrivateRoute>
      },
      {
        path: 'report',
        element: <PrivateRoute><Report /></PrivateRoute>
      },
      {
        path:"todays-attendance",
        element:<AdminRoute><TodaysAttendance/></AdminRoute>
      },
      {
        path:"employee-attendance",
        element:<AdminRoute><EmployeeAttendance/></AdminRoute>
      },
      
    ],
  }

]);

export default router;
