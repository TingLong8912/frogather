import express from 'express'
import axios from 'axios';

const router = express.Router();

router.get('/getReverseGeocoding', async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  try {
    const result = await getReverseGeocoding(lat, lon);
    res.json({ location: result });
  } catch (err) {
    console.log(err.message);
  }
});

const getReverseGeocoding = async (lat, lon) => {
  if (lat === undefined || lon === undefined) return [];
  const res = await axios({
    method: 'get',
    url: 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&' +
      `lat=${lat}&` +
      `lon=${lon}`,
  });
  const location = res.data;
  return location;
};

export default router;
