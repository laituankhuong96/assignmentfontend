import http from "./axiosHttp";

const getAllCategory = () => {
    return http.get("/category");
};
const getCategory = id => {
    return http.get(`/category/${id}`);
};
const createCategory = data => {
    return http.post("/category", data);
};
const updateCategory = (id, data) => {
    return http.put(`/category/${id}`, data);
};
const removeCategory = id => {
    return http.delete(`/category/${id}`);
};
export default {
    getAllCategory, getCategory, createCategory, updateCategory, removeCategory,
}