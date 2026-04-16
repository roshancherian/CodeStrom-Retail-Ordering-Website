import { useState } from "react";
import { forgotPassword, resetPassword } from "../services/authService";

function ForgotPasswordCard() {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [data, setData] = useState({
    token: "",
    newPassword: ""
  });

  // Step 1 → Get Token
  const handleEmail = async () => {
    try {
      const res = await forgotPassword(email);
      alert(res.data); // shows token (for now)
      setStep(2);
    } catch {
      alert("Error sending token");
    }
  };

  // Step 2 → Reset Password
  const handleReset = async () => {
    try {
      await resetPassword(data);
      alert("Password Updated Successfully");
      setStep(1);
    } catch {
      alert("Invalid token");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Forgot Password</h2>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <input
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleEmail}>
              Get Reset Token
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <input
              placeholder="Enter Token"
              onChange={(e) =>
                setData({ ...data, token: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="New Password"
              onChange={(e) =>
                setData({ ...data, newPassword: e.target.value })
              }
            />

            <button onClick={handleReset}>
              Reset Password
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default ForgotPasswordCard;