import { AxiosResponse } from 'axios';
import api from '../api';

import { ICityPointCreate, ICityPointResponse } from './authTypes';

export const getTasks = (): Promise<AxiosResponse<ICityPointResponse[]>> => {
  return api.get('city-point');
};

export const createTask = (body: ICityPointCreate): Promise<AxiosResponse<ICityPointResponse>> => {
  return api.post('/city-point', body);
};

export const getSimiliarByCategoryIdTasks = (categoryId: number): Promise<AxiosResponse<ICityPointResponse[]>> => {
  return api.get(`/city-point/similiar/${categoryId}`);
};

export const getOneByIdTask = (id: number): Promise<AxiosResponse<ICityPointResponse>> => {
  return api.get(`/city-point/${id}`);
};
