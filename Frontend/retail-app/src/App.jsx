import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<LoginPage />} />
  <Route path="/home" element={<HomePage />} />
  <Route path="/profile" element={<ProfilePage />} />
  <Route path="/cart" element={<CartPage />} />
    </Routes>
    
  );
}

export default App;