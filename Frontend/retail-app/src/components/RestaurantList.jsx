const RestaurantList = ({ restaurants, onSelect }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((res) => (
        <div
          key={res.id}
          className="restaurant-card"
          onClick={() => onSelect(res)}
        >
          <h3>{res.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;