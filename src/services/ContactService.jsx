import axios from 'axios';
import url from '../data/Environment'

export const getContact = async (id) => {
  const { data } = await axios.get(url + `users/${id}`);
  return data;
};

export const putContact = async (contact) => {
  console.log(contact)
  let model ={
    id: contact.id,
    firstName: contact.firstName? contact.firstName:"string",
    lastName: contact.firstName? contact.lastName:"string",
    email: contact.email? contact.email:"no@email.post",
    phone: contact.phone? contact.phone:"91000000",
    street: contact.street? contact.street:"string",
    city: contact.city? contact.city:"string"
  }
  
  try {
    const response = await axios.put(url + `users`, model);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const postContact = async (contact) => {
  try {
    const response = await axios.post(url + 'users/', contact);
    return response.data;
  } catch (error) {
    console.error('Error posting user:', error);
    throw error;
  }
};




