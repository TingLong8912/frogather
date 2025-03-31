import mongoose from "mongoose";

const commentsSchema = mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    userImg: String,
    likes: Array,
  }, 
  { timestamps: true }
);

const RecordComments = mongoose.model("RecordComments", commentsSchema);

export default RecordComments;

