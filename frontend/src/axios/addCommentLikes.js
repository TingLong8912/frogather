import { instance } from "../connection";

export const addCommentLikes = async ( postId, commentId, userId ) => {
  const { data } = await instance.post('/comment/addLikes', {
    postId: postId,
    commentId: commentId,
    userId: userId,
  });

  return data
} 