import api from "./apiConfig";


export const getRecipes = async () => {
  try {
    const response = await api.get("/recipes");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRecipe = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createRecipe = async (recipeData) => {
  try {
    const response = await api.post("/recipes", recipeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateRecipe = async (id, recipeData) => {
  try {
    const response = await api.put(`/recipes/${id}`, recipeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRecipe = async (id) => {
  try {
    const response = await api.delete(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
