export const getRestaurants = () => {
  return [
    {
      id: 1,
      name: "Pizza Hut",
      menu: [
        { name: "Veg Pizza", price: 200 },
        { name: "Cheese Pizza", price: 250 },
      ],
    },
    {
      id: 2,
      name: "Burger King",
      menu: [
        { name: "Veg Burger", price: 120 },
        { name: "Fries", price: 80 },
      ],
    },
  ];
};