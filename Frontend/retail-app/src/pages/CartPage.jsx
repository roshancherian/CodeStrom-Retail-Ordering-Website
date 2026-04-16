import { useEffect, useState } from "react";
import { getCartItems } from "../services/CartService";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = getCartItems();
    setCart(items);
  }, []);

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    alert(`Receipt sent to ${user.email} (dummy)`);

    console.log("Receipt:", {
      items: cart,
      total: getTotal(),
      email: user.email,
    });
  };

  const increaseQty = (index) => {
  const updatedCart = [...cart];
  updatedCart[index].quantity += 1;
  setCart(updatedCart);
};

const decreaseQty = (index) => {
  const updatedCart = [...cart];

  if (updatedCart[index].quantity > 1) {
    updatedCart[index].quantity -= 1;
    setCart(updatedCart);
  }
};

  return (
    <div className="page">
      <div className="card" style={{ width: "500px" }}>
        <h2>My Cart 🛒</h2>

        {/* Table */}
        <table width="100%" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
  {cart.map((item, index) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.price}</td>

      {/* Quantity with + - */}
      <td>
        <button onClick={() => decreaseQty(index)}>-</button>
        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
        <button onClick={() => increaseQty(index)}>+</button>
      </td>

      <td>{item.price * item.quantity}</td>
    </tr>
  ))}
</tbody>
        </table>

        {/* Total */}
        <h3 style={{ marginTop: "15px" }}>
          Total: ₹{getTotal()}
        </h3>

        {/* Checkout */}
        <button className="btn primary" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;