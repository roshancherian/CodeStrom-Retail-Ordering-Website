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
      <div className="user-section">

        {/* ICON ALWAYS VISIBLE */}
        <div
          className="user-icon"
          onClick={() => {
            if (!user) {
              navigate("/login"); // go to login if not logged
            } else {
              setOpen(!open);
            }
          }}
        >
          👤
        </div>

        {/* DROPDOWN ONLY IF LOGGED IN */}
        {user && open && (
          <div className="dropdown">

            <p className="username">{user.name}</p>

            <p onClick={() => navigate("/cart")}>🛒 Cart</p>

            <p onClick={() => navigate("/orders")}>📜 Orders</p>

            <button onClick={logout}>Logout</button>

          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;