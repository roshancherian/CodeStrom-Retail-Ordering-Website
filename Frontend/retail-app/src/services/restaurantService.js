import axios from "axios";

const API = "http://localhost:8080/api/restaurants";

export const getRestaurants = () => axios.get(API);