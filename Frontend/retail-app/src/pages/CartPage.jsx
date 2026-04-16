import { useEffect, useState } from "react";
import { getCart } from "../services/cartService";
import { placeOrder } from "../services/orderService";

function CartPage() {
  const [cart, setCart] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      getCart(user.id).then(res => setCart(res.data));
    }
  }, []);

  const handleOrder = async () => {
    try {
      await placeOrder(user.id);
      alert("Order placed successfully!");
      setCart([]); // clear UI
    } catch {
      alert("Error placing order");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map(c => (
          <div key={c.id} style={{ marginBottom: "10px" }}>
            {c.menuItem.name} × {c.quantity}
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button onClick={handleOrder}>
          Place Order
        </button>
      )}
    </div>
  );
}

export default CartPage;