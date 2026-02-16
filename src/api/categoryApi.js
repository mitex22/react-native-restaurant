import api from "./request";

export const getAll = async () => {

    const response = await api.get('/categories');

    return response.data;
};