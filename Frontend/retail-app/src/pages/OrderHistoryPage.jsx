import { useEffect, useState } from "react";
import { getOrderHistory } from "../services/orderService";

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getOrderHistory(user.id).then(res => setOrders(res.data));
  }, []);

  return (
    <div className="order-container">
      <h2>📜 Order History</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((o) => (
          <div className="order-card" key={o.id}>
            
            <h3>Order #{o.id}</h3>

            <p>💰 Amount: ₹{o.totalAmt}</p>

            <p className={`status ${o.status.toLowerCase()}`}>
              {o.status}
            </p>

          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistoryPage;