import { AxiosResponse } from 'axios';
import api from '../api';

import {
  IAddUserToTaskResponse,
  ICategoriesResponse,
  ICityPointCreate,
  ICityPointResponse,
  IUserResponse,
} from './tasksTypes';

export const getTasks = (): Promise<AxiosResponse<ICityPointResponse[]>> => {
  return api.get('city-point');
};

export const createTask = (body: ICityPointCreate): Promise<AxiosResponse<ICityPointResponse>> => {
  return api.post('/city-point', body);
};

export const getSimiliarByCategoryIdTasks = (categoryId: string): Promise<AxiosResponse<ICityPointResponse[]>> => {
  return api.get(`/city-point/similiar/${categoryId}`);
};

export const getOneByIdTask = (id: number): Promise<AxiosResponse<ICityPointResponse>> => {
  return api.get(`/city-point/${id}`);
};

export const getTasksByUserId = (id: number): Promise<AxiosResponse<IUserResponse>> => {
  return api.get(`/users/${id}`);
};

export const getCategories = (): Promise<AxiosResponse<ICategoriesResponse[]>> => {
  return api.get('/category');
};

export const addUserToTask = (userId: number, cpId: number): Promise<AxiosResponse<IAddUserToTaskResponse>> => {
  return api.get(`/city-point/addUser/${userId}/${cpId}`);
};
