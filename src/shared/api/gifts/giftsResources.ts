import { AxiosResponse } from 'axios';
import api from '../api';
import { IGiftsResponse } from './giftsTypes';

export const getGifts = (): Promise<AxiosResponse<IGiftsResponse[]>> => {
  return api.get('/awards', {});
};
