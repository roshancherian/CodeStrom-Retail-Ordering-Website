import { Routes, Route } from "react-router-dom";
import OrderHistoryPage from "./pages/OrderHistoryPage";

<Route path="/orders" element={<OrderHistoryPage />} />
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import MenuPage from "./pages/MenuPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/menu/:id" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;