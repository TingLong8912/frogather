import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const recordSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    coords: locationSchema,
    placeName: {
      type: String,
      min: 2,
      max: 50,
    },
    hashtag: Array,
    post: String,
    speciesImagePath: String,
    authorized: Boolean,
  }, 
  { timestamps: true }
);

const Record = mongoose.model("Record", recordSchema);

export default Record;

