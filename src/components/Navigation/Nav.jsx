import { Link } from "react-router";
import './Nav.css';

const Nav = ({cartItems}) => {

  return (
      <nav>
        <div>
          My Shop
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav;