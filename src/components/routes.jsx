import App from "../App";
import Profile from "./Profile";
import Error from "./Error/Error";
// import Nav from "./Nav";
// import { Outlet } from "react-router";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]

export default routes;
