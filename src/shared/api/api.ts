import axios, { AxiosRequestConfig } from 'axios';

export interface IAxiosRefreshResponse {
  refreshToken: string;
  accessToken: string;
  username: string;
}

export const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

// eslint-disable-next-line consistent-return
api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;

    return config;
  }
});

api.interceptors.response.use(
  (config) => config,
  // eslint-disable-next-line consistent-return
  async (error) => {
    try {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        const response = await axios.post<IAxiosRefreshResponse>(`${API_URL}auth/refresh`, {
          access_token: localStorage.getItem('access_token'),
          refresh_token: localStorage.getItem('refresh_token'),
        });

        localStorage.setItem('access_token', response.data.accessToken);
        localStorage.setItem('refresh_token', response.data.refreshToken);

        return api.request(originalRequest);
      }
    } catch (e) {}
  }
);

export default api;
