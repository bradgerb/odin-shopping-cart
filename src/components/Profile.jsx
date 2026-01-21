import { useParams } from "react-router";
import DefaultProfile from "./DefaultProfile";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
        <Nav />
      {/* <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2> */}
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
