import { useEffect, useState } from "react";
import { getRestaurants } from "../services/restaurantService";
import { useNavigate } from "react-router-dom";

function RestaurantList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getRestaurants().then(res => setData(res.data));
  }, []);

  // 🔍 FILTER LOGIC
  const filteredData = data.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* SEARCH BAR */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* RESTAURANT CARDS */}
      <div className="restaurant-container">
        {filteredData.map((r) => (
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

    </div>
  );
}

export default RestaurantList;