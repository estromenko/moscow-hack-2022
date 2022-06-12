export interface ICreateEvent {
  name: string;
  description: string;
  cords: {
    lon: number;
    lat: number;
  };
  categoryIds: number[];
  difficultId: number;
  time: number;
  dateStart: Date;
  dateEnd: Date;
}

export interface IEvent extends ICreateEvent {
  id: number;
}
