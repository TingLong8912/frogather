import { instance } from "../connection";

export const getFrog = async ( fromdata ) => {
  const backColor = fromdata.color;
  const location = fromdata.location;
  const patternType = fromdata.style;
  const category = fromdata.category;
  const species = fromdata.species;
  const name = fromdata.name;
  const description = fromdata.description;
  const img = fromdata.img;

  const { data } = await instance.get('/frog', { 
    params: 
      { 
        backColor: backColor,
        location: location,
        patternType: patternType,
        category: category,
        species: species,
        name: name,
      } 
    }
  );

  return data
} 
