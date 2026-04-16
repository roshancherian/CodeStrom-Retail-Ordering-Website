import { useState } from "react";
import { forgotPassword } from "../services/authService";

function ForgotPasswordCard() {
    const [email, setEmail] = useState("");

    const handleForgot = async () => {
        try {
            const res = await forgotPassword(email);
            alert(res.data); // shows token
        } catch {
            alert("Error");
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>

            <input
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleForgot}>
                Get Reset Token
            </button>
        </div>
    );
}

export default ForgotPasswordCard;