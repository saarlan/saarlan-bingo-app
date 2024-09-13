import axios from 'axios';

export const useApi = () => {
  const api = axios.create({
    baseURL: `${import.meta.env.API_BASE_URL}/api`,
  });

  return api;
};
