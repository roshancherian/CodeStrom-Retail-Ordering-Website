import { useEffect, useState } from "react";
import { getMenuByRestaurant } from "../services/menuService";
import { addToCart } from "../services/cartService";

function MenuList({ restId }) {
  const [menu, setMenu] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getMenuByRestaurant(restId).then(res => setMenu(res.data));
  }, [restId]);

  const handleAdd = async (menuId) => {
    await addToCart({
      userId: user.id,
      menuId: menuId,
      qty: 1
    });
    alert("Added to cart");
  };

  return (
    <div className="menu-container">
      {menu.map((item) => (
        <div className="menu-card" key={item.id}>
          
          <h3>{item.name}</h3>

          <p className="price">₹{item.price}</p>

          <button onClick={() => handleAdd(item.id)}>
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default MenuList;