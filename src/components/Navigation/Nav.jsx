import { Link } from "react-router";

const Nav = () => {

  return (
      <nav>
        <div>
          My Shop
        </div>
        <ul>
          <li>
            <Link to="/profile/home">Home</Link>
          </li>
          <li>
            <Link to="/profile/shop">Shop</Link>
          </li>
          <li>
            <Link to="/profile/cart">Cart</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav;