import { useState, useEffect } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUser({ ...user, profilePic: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEdit(false);
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="page">
      <div className="card">
        <h2>My Profile</h2>

        {/* Profile Image */}
        <div style={{ marginBottom: "15px" }}>
          <img
            src={user.profilePic || "https://via.placeholder.com/100"}
            alt="profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          {edit && (
            <input type="file" onChange={handleImageChange} />
          )}
        </div>

        {/* Fields */}
        <input
          name="name"
          value={user.name || ""}
          disabled={!edit}
          onChange={handleChange}
        />

        <input
          name="email"
          value={user.email || ""}
          disabled
        />

        <input
          name="phone"
          value={user.phone || ""}
          disabled={!edit}
          onChange={handleChange}
        />

        <input
          name="address"
          value={user.address || ""}
          disabled={!edit}
          onChange={handleChange}
        />

        {/* Buttons */}
        {!edit ? (
          <button className="btn primary" onClick={() => setEdit(true)}>
            Edit Profile
          </button>
        ) : (
          <button className="btn primary" onClick={handleSave}>
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;