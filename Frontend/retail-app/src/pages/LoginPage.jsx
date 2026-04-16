import LoginCard from "../components/LoginCard";
import { loginUser } from "../services/authService";

const LoginPage = () => {
  const handleLogin = async (data) => {
    try {
      const res = await loginUser(data);
      console.log("Login success:", res);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="page">
      <LoginCard onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;