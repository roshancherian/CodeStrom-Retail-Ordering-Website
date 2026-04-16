import axios from "axios";

const API = "http://localhost:8080/api/orders";

export const placeOrder = (userId) =>
    axios.post(API, { userId });

export const getOrderHistory = (userId) =>
    axios.get(`${API}/history?userId=${userId}`);