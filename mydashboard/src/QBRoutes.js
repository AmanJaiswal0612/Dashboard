import {createBrowserRouter} from "react-router-dom";
import App from './App';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Demo from './Pages/Demo';
import DemoReportOne from './Pages/Reports/DemoReportOne';
import DemoReportTwo from './Pages/Reports/DemoReportTwo';
import FirstTimeSetup from "./Pages/FirstTimeSetup";
import Cards from "./Pages/Cards/Cards";
import Users from "./Pages/Users/Users";
import CreateUsers from "./Pages/Users/CreateUsers";
import EditUsers from "./Pages/Users/EditUsers";
import CreateCards from "./Pages/Cards/CreateCards";
import EditCards from "./Pages/Cards/EditCards";
import Promoto from "./Pages/Promoto";
import Help from "./Pages/Help";

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
          element: <Users/>,
        },
        {
          path: "/products/create",
          element: <CreateUsers/>,
        },
        {
          path: "/products/edit",
          element: <EditUsers/>,
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