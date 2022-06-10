export interface IRegisterResponse {
  data: {
    email: string;
    name: string;
    roles: { name: string }[];
    refresh_token: null | string;
    id: number;
  };
  meta: null;
  total: null;
}

export interface IRegisterBody {
  name: string;
  email: string;
  password: string;
}
