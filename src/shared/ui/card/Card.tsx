import React, { useRef, FC, Dispatch, SetStateAction } from 'react';
import { YMaps, Map, Placemark, Clusterer, YMapsApi } from 'react-yandex-maps';
import { Box } from '@mui/material';

import { YMapsMethods } from './utils';
import { IPlacemark } from './types';

import './style.scss';

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
    behaviors: ['default', 'scrollZoom'],
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

  const getPointData = (index: number, placemark: IPlacemark) => {
    return {
      balloonContentBody: `<strong>${index + 1}</strong> ${placemark.name}`,
      clusterCaption: `<strong>${index + 1}</strong> ${placemark.name}`,
    };
  };

  const getPointOptions = () => {
    return {
      preset: 'islands#violetIcon',
    };
  };

  return (
    <Box display="flex" flexDirection="column" gap="10px" overflow="hidden">
      <Box width="100%" boxSizing="border-box">
        <input className="card-input" ref={inputRef} placeholder="куда маркер ставить будем?" />
      </Box>
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
              {
                // @ts-ignore
                <Clusterer
                  options={{
                    preset: 'islands#invertedVioletClusterIcons',
                    groupByCoordinates: false,
                    clusterDisableClickZoom: true,
                    clusterHideIconOnBalloonOpen: false,
                    geoObjectHideIconOnBalloonOpen: false,
                  }}
                >
                  {placemarks.map((placemark, index) => (
                    // @ts-ignore
                    <Placemark
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      geometry={placemark.coord}
                      properties={getPointData(index, placemark)}
                      options={getPointOptions()}
                    />
                  ))}
                </Clusterer>
              }
            </Map>
          }
        </YMaps>
      }
    </Box>
  );
};

Card.displayName = 'Card';

export default Card;
