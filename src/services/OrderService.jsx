import axios from 'axios';
import url from '../data/Environment'

export const getOrders = async () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    const { data } = await axios.get(url + `orders`, config);
    return data;
  };

export const addOrder = async (order) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  };
  const { data } = await axios.post(url + `orders`, order, config);
  return data;
};

export const editOrder = async (order) => { 
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    const { data } = await axios.post(url + `orders/${order.id}`, order, config);
    return data;
  };
