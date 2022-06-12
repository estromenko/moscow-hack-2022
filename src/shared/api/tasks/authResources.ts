import { AxiosResponse } from 'axios';
import api from '../api';

import { ICityPoint } from './authTypes';

export const tasks = (): Promise<AxiosResponse<ICityPoint[]>> => {
  return api.get('city-point');
};
