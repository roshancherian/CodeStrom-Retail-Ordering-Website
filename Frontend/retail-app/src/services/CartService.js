import axios from "axios";

const API = "http://localhost:8080/api/cart";

export const addToCart = (data) => axios.post(API, data);

export const getCart = (userId) =>
    axios.get(`${API}?userId=${userId}`);

export const updateCart = (id, qty) =>
    axios.put(`${API}/${id}?qty=${qty}`);

export const deleteCart = (id) =>
    axios.delete(`${API}/${id}`);