export interface ICategory {
  id: number;
  name: string;
  points: string[];
}

export interface IMana {
  id: number;
  mana_points: number;
  createdDate: Date;
  users: string[];
}

export interface IDifficult extends ICategory {}

export interface IPermission {
  id: number;
  name: string;
}

export interface IRole {
  id: number;
  name: string;
  permissions: IPermission[];
}

export interface ICityPointCreate {
  name: string;
  description: string;
  cords: {
    lon: number;
    lat: number;
  };
  categoryIds: number[];
  difficultId: number;
  time: number;
  address: string;
  dateStart: string;
  dateEnd: string;
}

export interface IUserResponse {
  id: number;
  name: string;
  email: string;
  roles: IRole[];
  // eslint-disable-next-line no-use-before-define
  city_point: ICityPointResponse[];
  mana: IMana[];
}

export interface ICityPointResponse {
  id: number;
  name: string;
  description: string;
  cords: {
    id: number;
    lon: number;
    lat: number;
  };
  categories: ICategory[];
  difficultId: IDifficult;
  time: number;
  address: string;
  dateStart: Date;
  dateEnd: Date;
  users?: IUserResponse[];
}

export interface ICategoriesResponse {
  id: number;
  name: string;
}

export interface IAddUserToTaskResponse extends ICityPointResponse {
  users: IUserResponse[];
}
