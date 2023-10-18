import {createBrowserRouter} from "react-router-dom";
import App from './App';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Demo from './Pages/Demo';
import DemoReportOne from './Pages/Reports/DemoReportOne';
import DemoReportTwo from './Pages/Reports/DemoReportTwo';
import FirstTimeSetup from "./Pages/FirstTimeSetup";
import Cards from "./Pages/Cards/Customers";
import CreateCards from "./Pages/Cards/CreateCustomers";
import EditCards from "./Pages/Cards/EdirCustomers";
import Promoto from "./Pages/Promoto";
import Help from "./Pages/Help";
import Products from "./Pages/Users/Products";
import CreateProducts from "./Pages/Users/CreateProducts";
import EditProducts from "./Pages/Users/EditProducts";

 const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path:'/firsttimesetup',
      element: <FirstTimeSetup/>
    },
    {
      path: "/",
      element:<App/>,
      children: [
        {
          path: "/",
          element: <Demo/>,
        },
        {
          path: "/products",
          element: <Products/>,
        },
        {
          path: "/products/create",
          element: <CreateProducts/>,
        },
        {
          path: "/products/edit",
          element: <EditProducts/>,
        },

        {
          path: "/customers",
          element: <Cards/>,
        },
        {
          path: "/customers/create",
          element: <CreateCards/>,
        },
        {
          path: "/customers/edit",
          element: <EditCards/>,
        },
        {
          path: "/income/operating",
          element: <DemoReportOne/>,
        },
        {
          path: "/income/nonoperating",
          element: <DemoReportTwo/>,
        },
        {
          path: "/promote",
          element: <Promoto/>,
        },
        {
          path: "/help",
          element: <Help/>,
        },
      ],
    },
  ]);

  export default router