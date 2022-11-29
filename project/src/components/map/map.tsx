import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {TCity} from '../../types/city';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {TOffer} from '../../types/offers';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

type MapProps = {
  points: TOffer[];
  city: TCity;
  classPrefix: string;
  activeOffer?: TOffer;
}

function Map({points, city, activeOffer, classPrefix}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point: TOffer) => {
        const icon = activeOffer && point.id === activeOffer.id ? activeCustomIcon : defaultCustomIcon;
        const {latitude, longitude} = point.location;
        leaflet
          .marker({
            lat: latitude,
            lng: longitude
          })
          .setIcon(icon)
          .addTo(map);
      });
    }
  }, [map, points, activeOffer]);

  useEffect(() => {
    if (map) {
      map.flyTo({lat: city.location.latitude, lng: city.location.longitude});
    }
  }, [city]);

  return (
    <section
      className={`${classPrefix}__map map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
