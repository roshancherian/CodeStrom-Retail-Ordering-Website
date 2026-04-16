import { useEffect, useState } from "react";
import { getMenuByRestaurant } from "../services/menuService";
import { addToCart } from "../services/cartService";

function MenuList({ restId }) {
  const [menu, setMenu] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getMenuByRestaurant(restId).then(res => setMenu(res.data));
  }, []);

  const add = async (id) => {
    await addToCart({ userId: user.id, menuId: id, qty: 1 });
    alert("Added!");
  };

  return (
    <div className="grid">
      {menu.map(m => (
        <div className="card" key={m.id}>
          <h4>{m.name}</h4>
          <p>₹{m.price}</p>
          <button onClick={() => add(m.id)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default MenuList;