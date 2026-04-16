import RestaurantList from "../components/RestaurantList";

function HomePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Restaurants</h1>
      <RestaurantList />
    </div>
  );
}

export default HomePage;