import { AxiosResponse } from 'axios';
import api from '../api';

import { ICreateEvent, IEvent } from './eventTypes';

export const createEvent = (body: ICreateEvent): Promise<AxiosResponse<IEvent>> => {
  return api.post('/city-point', body);
};

export const getAllEvents = (): Promise<AxiosResponse<IEvent[]>> => {
  return api.get('/city-point');
};

export const getSimiliarByCategoryIdEvents = (categoryId: number): Promise<AxiosResponse<IEvent[]>> => {
  return api.get(`/city-point/similiar/${categoryId}`);
};

export const getOneByIdEvent = (id: number): Promise<AxiosResponse<IEvent>> => {
  return api.get(`/city-point/${id}`);
};
