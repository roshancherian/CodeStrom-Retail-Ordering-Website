import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordCard = ({ sendOtp, verifyOtp, resetPassword }) => {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // Step 1 → Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    const res = await sendOtp(email);
    if (res) setStep(2);
  };

  // Step 2 → Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const res = await verifyOtp(otp);
    if (res) setStep(3);
  };

  // Step 3 → Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const res = await resetPassword({ password, confirmPassword });
    if (res) {
      alert("Password updated!");
      navigate("/");
    }
  };

  return (
    <div className="card">
      <h2>Forgot Password</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <form onSubmit={handleSendOtp}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn primary">Send OTP</button>
        </form>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <form onSubmit={handleVerifyOtp}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button className="btn primary">Verify OTP</button>
        </form>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="btn primary">Reset Password</button>
        </form>
      )}

      <button className="btn secondary" onClick={() => navigate("/")}>
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPasswordCard;