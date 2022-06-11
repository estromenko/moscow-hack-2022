import React, { useRef, FC, Dispatch, SetStateAction } from 'react';
import { YMaps, Map, Placemark, YMapsApi } from 'react-yandex-maps';

import { YMapsMethods } from './utils';
import { IPlacemark } from './types';

interface ICard {
  placemarks: IPlacemark[];
  setPlacemarks: Dispatch<SetStateAction<IPlacemark[]>>;
}

const Card: FC<ICard> = ({ placemarks, setPlacemarks }) => {
  const ref = useRef<null | any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const ymapsRef = useRef<YMapsApi | null>(null);
  const mapState = {
    center: [55.76, 37.64],
    zoom: 7,
    controls: [],
  };

  const onSuggestSelect = async (event: any) => {
    const name = event.get('item').value;
    if (ymapsRef.current) {
      const coord = await ymapsRef.current.decode(name);
      const place = {
        coord,
        name,
      };

      setPlacemarks((prev) => [...prev, place]);
    }
  };

  const onYmapsLoad = (ymaps: YMapsApi) => {
    new ymaps.SuggestView(inputRef.current).events.add('select', onSuggestSelect);
    const ymapsData = new YMapsMethods(ymaps);

    ymapsRef.current = ymapsData;
  };

  return (
    <div>
      <input ref={inputRef} placeholder="куда маркер ставить будем?" />
      {
        // @ts-ignore
        <YMaps
          query={{
            ns: 'use-load-option',
            apikey: process.env.REACT_APP_YANDEX_API_KEY,
            load: 'package.full',
          }}
        >
          {
            // @ts-ignore
            <Map state={mapState} onLoad={onYmapsLoad} instanceRef={ref} width="100%">
              {placemarks.map((placemark) => (
                // @ts-ignore
                <Placemark geometry={placemark.coord} />
              ))}
            </Map>
          }
        </YMaps>
      }
    </div>
  );
};

export default Card;
