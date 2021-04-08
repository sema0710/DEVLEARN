import axios, { AxiosInstance } from 'axios';
import config from '../../../config/config';

export const getApiRequest = (): AxiosInstance => {
  if (typeof window !== 'undefined')
    return axios.create({
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      baseURL: config.apiHost,
    });
};

export const getApiRequestWithoutToken = (): AxiosInstance => {
  return axios.create({
    baseURL: config.apiHost,
  });
};

export default getApiRequest;
