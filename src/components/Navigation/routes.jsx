import Home from "../Pages/Home";
import Profile from "./Profile";
import Error from "../Error/Error";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
]

export default routes;