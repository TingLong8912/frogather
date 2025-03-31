import { instance } from "../connection";

export const getRecords = async (isAsc) => {
  const { data } = await instance.get('/record',
  {
    params: 
    { 
      isAsc: isAsc,
    } 
  });

  return data
} 
