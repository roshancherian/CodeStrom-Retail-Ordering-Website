import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dropdown">
      <p onClick={() => navigate("/profile")}>Profile</p>
      <p onClick={() => navigate("/cart")}>Cart</p>
      <p onClick={handleLogout}>Logout</p>
    </div>
  );
};

export default ProfileDropdown;