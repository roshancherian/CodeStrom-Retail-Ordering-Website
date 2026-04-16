import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
          RetailApp
        </h2>
      </div>

      {/* Center */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
        />
      </div>

      {/* Right */}
      <div className="nav-right">
        <button onClick={() => navigate("/home")} className="home-btn">
          Home
        </button>

        <div onClick={() => setOpen(!open)} className="profile">
          👤
        </div>

        {open && <ProfileDropdown />}
      </div>
    </nav>
  );
};

export default Navbar;