import { instance } from "./../connection";

export const getReverseGeocoding = async (lat, lon) => {
  const { data: { location } } = await instance.get('/api/getReverseGeocoding',
    {
      params: 
      { 
        lat: lat,
        lon: lon, 
      } 
    }
  );
  const place_name = location["display_name"];
  const place_name_list = place_name?.split(", ");
  //console.log(place_name_list);
  return place_name_list
} 
