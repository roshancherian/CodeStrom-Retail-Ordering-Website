import ForgotPasswordCard from "../components/ForgotPasswordCard";
import {
  sendOtp,
  verifyOtp,
  resetPassword,
} from "../services/authService";

const ForgotPasswordPage = () => {
  return (
    <div className="page">
      <ForgotPasswordCard
        sendOtp={sendOtp}
        verifyOtp={verifyOtp}
        resetPassword={resetPassword}
      />
    </div>
  );
};

export default ForgotPasswordPage;