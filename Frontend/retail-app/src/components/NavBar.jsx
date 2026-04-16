import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">

      {/* LEFT */}
      <h2 className="logo" onClick={() => navigate("/")}>
        🍔 FoodApp
      </h2>

      {/* RIGHT */}
      {user && (
        <div className="user-section">

          <div
            className="user-icon"
            onClick={() => setOpen(!open)}
          >
            👤
          </div>

          {open && (
            <div className="dropdown">

              {/* USER NAME */}
              <p className="username">{user.name}</p>

              {/* CART */}
              <p onClick={() => {
                navigate("/cart");
                setOpen(false);
              }}>
                🛒 Cart
              </p>

              {/* ORDER HISTORY */}
              <p onClick={() => {
                navigate("/orders");
                setOpen(false);
              }}>
                📜 Orders
              </p>

              {/* LOGOUT */}
              <button onClick={logout}>
                Logout
              </button>

            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;