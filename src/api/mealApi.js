import api from "./request";

export const getAll = async () => {

    const response = await api.get('/meals');

    return response.data;
}

export const getAllByCategory = async (categoryId) => {

    const response = await api.get('/meals', { params: { categoryId } });

    return response.data;
};

export const getById = async (mealId) => {

    console.log(mealId)

    const response = await api.get(`/meals/${mealId}`);

    return response.data;
}