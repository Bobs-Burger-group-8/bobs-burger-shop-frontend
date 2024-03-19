import axios from 'axios';

const BASE_API_URL = 'https://boolean-api-server.fly.dev/henrikrosenkilde/';

export const getContact = async (id) => {
  const { data } = await axios.get(BASE_API_URL + `contact/${id}`);
  return data;
};

export const putContact = async (contact) => {
  try {
    const response = await axios.put(BASE_API_URL + 'contact/1', contact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};
