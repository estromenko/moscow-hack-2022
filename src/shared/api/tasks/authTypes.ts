export interface ICategory {
  id: number;
  name: string;
  points: string[];
}

export interface ICityPoint {
  id: number;
  name: string;
  description: string;
  cords: {
    id: number;
    lon: string;
    lat: string;
  };
  categories: ICategory[];
  difficult: ICategory;
  time: number;
  address: string;
  dateStart: Date;
  dateEnd: Date;
}
