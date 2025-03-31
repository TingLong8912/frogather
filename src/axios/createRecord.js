import { instance } from "../connection";

export const createRecord = async ( formObject ) => {
  const { data } = await instance.post('/record', {
    userId: null,
    userName: formObject.userName,
    species: formObject.speciesName,
    hashtag: formObject.hashtag,
    coords: formObject.placeCoord,
    placeName: formObject.placeName,
    post: formObject.context,
    speciesImagePath: formObject.animalPhoto,
    authorized: formObject.isAuthPulic,
  });

  return data
} 
