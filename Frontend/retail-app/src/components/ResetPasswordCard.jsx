import { useState } from "react";
import { resetPassword } from "../services/authService";

function ResetPasswordCard() {
    const [data, setData] = useState({
        token: "",
        newPassword: ""
    });

    const handleReset = async () => {
        try {
            await resetPassword(data);
            alert("Password Updated");
        } catch {
            alert("Invalid token");
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>

            <input
                placeholder="Token"
                onChange={(e) => setData({ ...data, token: e.target.value })}
            />

            <input
                type="password"
                placeholder="New Password"
                onChange={(e) => setData({ ...data, newPassword: e.target.value })}
            />

            <button onClick={handleReset}>
                Reset Password
            </button>
        </div>
    );
}

export default ResetPasswordCard;