import axios from 'axios';
import url from '../data/Environment'

const userId = await localStorage.getItem('userId')

//Get all favourites
export const getFavourites = async () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    const { data } = await axios.get(url + `favourites`, config);
    return data;
  };

  //Get all favourites
export const getFavouritesByUserId = async () => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  };
  const { data } = await axios.get(url + `favourites/user/${userId}`, config);
  return data;
};

//Save a favourite postModel: userid, productid
export const saveNewFavourite = async (itemId) => { 
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    let model = {userId:await userId, productId:itemId}
    const { data } = await axios.post(url + `favourites`, model, config);
    return data;
  };

  export const removeFavourite = async (favId) => { 
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    const { data } = await axios.delete(url + `favourites/${favId}`, config);
    return data;
  };
