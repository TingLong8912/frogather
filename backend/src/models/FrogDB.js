import mongoose from "mongoose";
const Schema = mongoose.Schema;

const forgSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    backColor: {
        type: [String],
    },
    location: {
        type: [String],
    },
    patternType: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    species: {
        type: String,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    }
});

const FrogDB = mongoose.model('FrogDB', forgSchema);
module.exports = FrogDB;
