import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left - App Name */}
      <div className="nav-left">
        <h2>RetailApp</h2>
      </div>

      {/* Center - Search */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
        />
      </div>

      {/* Right - Profile */}
      <div className="nav-right">
        <div onClick={() => setOpen(!open)} className="profile">
          👤
        </div>

        {open && <ProfileDropdown />}
      </div>
    </nav>
  );
};

export default Navbar;