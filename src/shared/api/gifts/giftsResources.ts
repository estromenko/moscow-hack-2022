import { AxiosResponse } from 'axios';
import api from '../api';
import { IGiftCreateBody, IGiftsResponse } from './giftsTypes';

export const getGifts = (): Promise<AxiosResponse<IGiftsResponse[]>> => {
  return api.get('/awards', {});
};

export const createGift = (body: IGiftCreateBody): Promise<AxiosResponse<IGiftCreateBody>> => {
  return api.post('/awards', body);
};
