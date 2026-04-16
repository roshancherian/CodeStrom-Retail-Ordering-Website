import { useState, useEffect } from "react";

const MenuList = ({ restaurant }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const getQty = (item) => {
    const found = cart.find((c) => c.name === item.name);
    return found ? found.quantity : 0;
  };

  const increaseQty = (item) => {
    let newCart = [...cart];
    const index = newCart.findIndex((c) => c.name === item.name);

    if (index > -1) {
      newCart[index].quantity += 1;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }

    updateCart(newCart);
  };

  const decreaseQty = (item) => {
    let newCart = [...cart];
    const index = newCart.findIndex((c) => c.name === item.name);

    if (index > -1) {
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      } else {
        newCart.splice(index, 1);
      }
    }

    updateCart(newCart);
  };

  if (!restaurant) {
    return <h3>Select a restaurant 🍽️</h3>;
  }

  return (
    <div className="menu-list">
      <h2>{restaurant.name} Menu</h2>

      {restaurant.menu.map((item, index) => (
        <div key={index} className="menu-item">
          <span>{item.name} - ₹{item.price}</span>

          {/* Quantity Controls */}
          <div>
            <button onClick={() => decreaseQty(item)}>-</button>
            <span style={{ margin: "0 10px" }}>{getQty(item)}</span>
            <button onClick={() => increaseQty(item)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;