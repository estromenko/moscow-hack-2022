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
  name: string;
  id: number;
}

export interface IRefreshBody extends ILoginResponse {}

export interface IRefreshResult extends ILoginResponse {
  email: string;
  name: string;
  id: number;
}

export interface IRegisterResponse extends ILoginResponse {}
export interface IRegisterResult extends ILoginResult {}

export interface IUserProfileResponse {
  id: number;
  name: string;
}
