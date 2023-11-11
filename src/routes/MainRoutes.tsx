import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/Layout/HomeLayout";
import HomeScreen from "../pages/HomeScreen";
import Error2 from "../pages/Error/Error";
import Question from "../pages/Question";

export const mainRoute = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
  },
  {
    path:"/auth",
    element:<HomeScreen/>
  },
  {
    path:"*",
    element:<Error2/>
  }
  ,
  {
    path:"/questions",
    element:<Question/>
  }
])