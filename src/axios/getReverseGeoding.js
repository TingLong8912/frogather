import axios from "axios";

export const getReverseGeocoding = async (lat, lon) => {
  if (lat === undefined || lon === undefined) return [];
  const res = await axios({
    method: 'get',
    url: 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&' +
      `lat=${lat}&` +
      `lon=${lon}`,
  });
  const location = res.data;
  const place_name = location["display_name"];
  const place_name_list = place_name?.split(", ");
  return place_name_list;
};
