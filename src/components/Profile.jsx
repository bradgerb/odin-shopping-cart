import { useParams } from "react-router";
import DefaultProfile from "./Pages/DefaultProfile";
import Nav from "./Nav";
import Home from "./Pages/Home";
import Shop from "./Shop";
import Cart from "./Pages/Cart";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
        <Nav />
      {name === "home" ? (
        <Home />
      ) : name === "shop" ? (
        <Shop />
      ) : name === "cart" ? (
        <Cart />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
