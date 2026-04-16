import axios from "axios";

const API = "http://localhost:8080/api/menu";

export const getMenuByRestaurant = (restId) =>
    axios.get(`${API}/restaurant/${restId}`);