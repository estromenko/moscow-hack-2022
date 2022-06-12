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
export interface IRegisterResponse extends ILoginResponse {}
export interface IRegisterResult extends ILoginResult {}

export interface IUserProfileResponse {
  id: number;
  name: string;
}
