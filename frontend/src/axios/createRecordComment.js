import { instance } from "../connection";

export const createRecordComments = async ( formObject ) => {
  const { data } = await instance.post('/comment/addComment', {
    postId: formObject.postId,
    userName: formObject.userName,
    userImg: formObject.userImg,
    comment: formObject.comment,
  });

  return data
} 
