import api from '../api';
import { IRegisterResponse, IRegisterBody } from './authTypes';
import { AxiosResponse } from 'axios';

export const login = () => {
  return api.post('auth/login');
};

export const register = (body: IRegisterBody): Promise<AxiosResponse<IRegisterResponse>> => {
  return api.post<IRegisterResponse>('auth/reg', body);
};
