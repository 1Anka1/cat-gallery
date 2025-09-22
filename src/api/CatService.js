import axios from 'axios';

const URL = 'https://api.thecatapi.com/v1/images/search?limit=6';

const instance = axios.create({
  baseURL: URL,
});

export const CatService = async () => {
  const { data } = await instance.get();
  return data.slice(1, 7);
};
