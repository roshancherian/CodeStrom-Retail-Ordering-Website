import { useEffect, useState } from "react";
import { getOrderHistory } from "../services/orderService";

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getOrderHistory(user.id).then(res => setOrders(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📜 Order History</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map(o => (
          <div key={o.id} style={{ marginBottom: "10px" }}>
            Order ID: {o.id} | ₹{o.totalAmt} | {o.status}
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistoryPage;