import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import NavBar from "./components/NavBar";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <NavBar />

      <Routes>

        {/* DEFAULT ROUTE */}
        <Route
          path="/"
          element={
            user ? <HomePage /> : <Navigate to="/login" />
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/menu/:id" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />

      </Routes>
    </>
  );
}

export default App;