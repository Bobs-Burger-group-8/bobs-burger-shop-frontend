import axios from 'axios';
import url from '../data/Environment'

export const getAllProducts = async () => {
    const  { data } = await axios.get(url + `products`);
    return  data;
  };

export const getProduct = async (id) => {
  const { data } = await axios.get(url + `products/${id}`);
  return data;
};

export const getProductsByCategory = async (category) => {
    const { data } = await axios.get(url + `products/category=${category}`);
    return data;
  };

  export const getProductIngredients = async (id) => {
    const { data } = await axios.get(url + `products/${id}/ingredients`);
    return data;
  };
  

export const putProduct = async (product) => {
  try {
    const response = await axios.put(url + `products/${product.id}`, product);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const postProduct = async (product) => {
  try {
    const response = await axios.post(url + 'users/', product);
    return response.data;
  } catch (error) {
    console.error('Error posting user:', error);
    throw error;
  }
};




