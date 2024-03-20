import axios from 'axios';
import url from '../data/Environment'

//Get all favourites
export const getFavourites = async () => {
    const { data } = await axios.get(url + `favourites`);
    return data;
  };

  //Get all favourites
export const getFavouritesByUserId = async (id) => {
  const { data } = await axios.get(url + `favourites/user/${id}`);
  return data;
};

//Save a favourite postModel: userid, productid
export const saveNewFavourite = async (userId, productId) => { 
    const { data } = await axios.post(url + `favourites`, {userId, productId});
    return data;
  };

  export const removeFavourite = async (id) => { 
    const { data } = await axios.post(url + `favourites/${id}`);
    return data;
  };
