import { instance } from "../connection";

export const getRecordComments = async ( postId ) => {
  console.log(postId);
  const { data } = await instance.get('/comment', { 
    params: 
      { 
        postId: postId 
      } 
    }
  );

  return data
} 
