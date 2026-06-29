import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  const isAdminPage =
    location.pathname === "/admin" ||
    location.pathname === "/admin/dashboard";

  return (
    <div>
    <header className="navbar">
      <div className="brand">
        <Link to="/">RedSky</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Sirf admin pages par dikhega */}
          {isAdminPage && (
            <>
              <li>
                <Link to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>

              <li>
                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
    </div>
  );
}