import { AxiosResponse } from 'axios';

import api from '../api';
import {
  IRegisterResponse,
  IRegisterBody,
  ILoginBody,
  ILoginResponse,
  IRefreshBody,
  IUserProfileResponse,
} from './authTypes';

export const login = (body: ILoginBody): Promise<AxiosResponse<ILoginResponse>> => {
  return api.post<ILoginResponse>('auth/login', body);
};

export const register = (body: IRegisterBody): Promise<AxiosResponse<IRegisterResponse>> => {
  return api.post<IRegisterResponse>('auth/reg', body);
};

export const refresh = (body: IRefreshBody): Promise<AxiosResponse<IRefreshBody>> => {
  return api.post<IRefreshBody>('auth/refresh', body);
};

export const userProfile = (): Promise<AxiosResponse<IUserProfileResponse>> => {
  return api.get<IUserProfileResponse>('users/profile', {});
};
