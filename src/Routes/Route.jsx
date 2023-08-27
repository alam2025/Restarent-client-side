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
import TodaysAttendance from "../layout/Dashboard/Attendance/TodaysAttendays/TodaysAttendance";
import EmployeeAttendance from "../layout/Dashboard/Attendance/EmployeeAttendance/EmployeeAttendance";
import AttendanceSheet from "../layout/Dashboard/Attendance/AttendanceSheet/AttendanceSheet";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";


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
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
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
        element: <PrivateRoute><Statistics /></PrivateRoute>
      },
      {
        path:"todays-attendance",
        element:<TodaysAttendance/>
      },
      {
        path:"employee-attendance",
        element:<EmployeeAttendance/>
      },
      {
        path:'attendance-sheet',
        element:<AttendanceSheet/>
      }
    ],
  }

]);

export default router;
