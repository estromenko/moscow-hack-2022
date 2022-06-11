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

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IRegisterBody {
  name: string;
  email: string;
  password: string;
}

export interface ILoginBody {
  email: string;
  password: string;
}

export interface ILoginResult extends ILoginResponse {
  email: string;
}

export interface IRefreshBody extends ILoginResponse {}
