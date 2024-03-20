import axios from 'axios';
import url from '../data/Environment'

const userId = await localStorage.getItem('userId')

//Get all favourites
export const getFavourites = async () => {
    const { data } = await axios.get(url + `favourites`);
    return data;
  };

  //Get all favourites
export const getFavouritesByUserId = async () => {
  const { data } = await axios.get(url + `favourites/user/${userId}`);
  return data;
};

//Save a favourite postModel: userid, productid
export const saveNewFavourite = async (itemId) => { 
    let model = {userId:await userId, productId:itemId}
    const { data } = await axios.post(url + `favourites`, model);
    return data;
  };

  export const removeFavourite = async (favId) => { 
    const { data } = await axios.delete(url + `favourites/${favId}`);
    return data;
  };
