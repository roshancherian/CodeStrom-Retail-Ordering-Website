import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css";

const SignupCard = ({ onSignup }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(form);

  };
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />

        <button type="submit" className="btn primary">
          Sign Up
        </button>

        
      </form>

      <button className="btn secondary"
      onClick={() => navigate("/")}>Login</button>
    </div>
  );
};

export default SignupCard;