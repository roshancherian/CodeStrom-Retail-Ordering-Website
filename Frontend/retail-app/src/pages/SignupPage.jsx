import SignupCard from "../components/SignupCard";
import { registerUser } from "../services/authService";

const SignupPage = () => {
  const handleSignup = async (data) => {
    try {
      const res = await registerUser(data);
      console.log("Signup success:", res);
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="page">
      <SignupCard onSignup={handleSignup} />
    </div>
  );
};

export default SignupPage;