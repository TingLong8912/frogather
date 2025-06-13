import RecordComments from "../models/RecordComments";

export const createRecordComment = async (req, res) => {
  try {
    const { 
      postId,
      userName,
      userImg,
      comment,
    } = req.body;

    //const user = await User.findById(userId);
    const newRecordComment = new RecordComments({
      postId,
      userName,
      userImg,
      comment,
      likes: [],
    });
    console.log(newRecordComment);

    await newRecordComment.save();
    const recordComments = await RecordComments.find({ postId: { $eq: postId } });
    res.status(201).json(recordComments);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}

export const getRecordComments = async (req, res) => {
  try {
    const postId = req.query.postId;
    const recordComments = await RecordComments.find({ postId: { $eq: postId } }); 
    res.status(200).json(recordComments);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addCommentLikes = async (req, res) => {
  try {
    const { postId, commentId, userId } = req.body;
    const target_record = await RecordComments.findById(commentId);
    var likes = target_record["likes"];
    var likes_cnt = target_record["likes"].length;
    var temp = [...likes];
    if (likes.includes(userId)) {
      likes_cnt -= 1;
      var array_index = temp.indexOf(userId);
      if (array_index > -1) temp.splice(array_index, 1); 
    } else {
      likes_cnt += 1;
      temp = [...likes, userId];
    }
    await RecordComments.updateOne( 
      { _id: commentId },
      [
        { $set: { likes: temp } },
      ]
    );
    const recordComments = await RecordComments.find({ postId: { $eq: postId } }); 
    res.status(200).json(recordComments);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}