import { useEffect, useState } from "react";
import { getRestaurants } from "../services/restaurantService";
import { useNavigate } from "react-router-dom";

function RestaurantList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRestaurants().then(res => setData(res.data));
  }, []);

  return (
    <div className="restaurant-container">
      {data.map((r) => (
        <div
          className="restaurant-card"
          key={r.id}
          onClick={() => navigate(`/menu/${r.id}`)}
        >
          <h3>{r.name}</h3>
          <p>View Menu →</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;