import { AxiosResponse } from 'axios';

import api from '../api';
import { IRegisterResponse, IRegisterBody, ILoginBody, ILoginResponse } from './authTypes';

export const login = (body: ILoginBody): Promise<AxiosResponse<ILoginResponse>> => {
  return api.post<ILoginResponse>('auth/login', body);
};

export const register = (body: IRegisterBody): Promise<AxiosResponse<IRegisterResponse>> => {
  return api.post<IRegisterResponse>('auth/reg', body);
};
