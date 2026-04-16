import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import RestaurantList from "../components/RestaurantList";
import MenuList from "../components/MenuList";
import { getRestaurants } from "../services/restaurantService";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  return (
    <div>
      <Navbar />

      <div className="home-container">
        {/* LEFT */}
        <RestaurantList
          restaurants={restaurants}
          onSelect={setSelectedRestaurant}
        />

        {/* RIGHT */}
        <MenuList restaurant={selectedRestaurant} />
      </div>
    </div>
  );
};

export default HomePage;