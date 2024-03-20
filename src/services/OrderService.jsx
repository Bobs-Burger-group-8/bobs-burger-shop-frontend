import axios from 'axios';
import url from '../data/Environment'

export const getOrders = async () => {
    const { data } = await axios.get(url + `orders`);
    return data;
  };

export const addOrder = async (order) => {
  const { data } = await axios.post(url + `orders`, order );
  return data;
};

export const editOrder = async (order) => { 
    const { data } = await axios.post(url + `orders/${order.id}`, order);
    return data;
  };
