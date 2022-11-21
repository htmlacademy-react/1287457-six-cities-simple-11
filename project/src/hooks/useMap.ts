import {useRef, useEffect, useState, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {TCity} from '../types/city';
import {Map} from 'leaflet';
import {LEAFLET_TILE_LAYER, LEAFLET_COPYRIGHT} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: TCity) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const {lat, lon, zoom} = city;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: lat,
          lng: lon,
        },
        zoom: zoom,
      });

      leaflet
        .tileLayer(
          LEAFLET_TILE_LAYER,
          {
            attribution: LEAFLET_COPYRIGHT,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
