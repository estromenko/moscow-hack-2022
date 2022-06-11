import { YMapsApi } from 'react-yandex-maps';

export class YMapsMethods {
  public ymaps: YMapsApi;

  constructor(ymaps: YMapsApi) {
    this.ymaps = ymaps;
  }

  public async decode(data: string) {
    const coord = await this.ymaps
      .geocode(data)
      .then((result: any) => result.geoObjects.get(0).geometry.getCoordinates());

    return coord;
  }
}
