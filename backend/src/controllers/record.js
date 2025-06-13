import Record from "../models/Record";

export const createReocrd = async (req, res) => {
  try {
    const { 
      userId, 
      userName,
      species, 
      hashtag,
      coords,
      placeName,
      post,
      speciesImagePath,
      authorized, 
    } = req.body;

    //const user = await User.findById(userId);
    const newRecord = new Record({
      userId,
      userName,
      species,
      hashtag,
      coords: {
        type: 'Point',
        coordinates: coords
      },
      placeName,
      post,
      speciesImagePath,
      authorized
    });
    console.log(newRecord);

    await newRecord.save();

    const record = await Record.find({ authorized: { $eq: true } });
    res.status(201).json(record);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}

export const getRecords = async (req, res) => {
  try {
    const { isAsc } = req.query;
    const record = await Record.find({ authorized: { $eq: true } }).sort({ _id: isAsc }); 
    res.status(200).json(record);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};