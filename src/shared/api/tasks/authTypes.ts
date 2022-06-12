export interface ICategory {
  id: number;
  name: string;
  points: string[];
}

export interface IDifficult extends ICategory {}

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
  dateStart: Date;
  dateEnd: Date;
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
}
