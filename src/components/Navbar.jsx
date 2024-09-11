import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import formatCurrency from "../utils/formatcurrency.js"

function Navbar() {
  const [token, setToken] = useState(false);
  const { total } = useCart();


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🍕 Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    🔒 Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    🔐 Login
                  </Link>
                </li>
                <li  className="nav-item">
                <Link className="navbar-link" to="/register">
                🔐 Registro
                </Link>
                </li>
              </>
            )}
          
          </ul>
        </div>
        
        <Link to="/cart">
          <button className="btn btn-outline-primary">
            🛒 Total: {formatCurrency(total)}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
