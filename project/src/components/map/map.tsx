import {useEffect, useRef} from 'react';
import {Icon, Marker, LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City} from '../../types/city';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {Offer} from '../../types/offer';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

type MapProps = {
  points: Offer[];
  city: City;
  classPrefix: string;
  activeOffer?: Offer;
}

function Map({points, city, activeOffer, classPrefix}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const newLayer: LayerGroup = new LayerGroup();
    if (map) {
      points.forEach((point: Offer) => {
        const icon = activeOffer && point.id === activeOffer.id ? activeCustomIcon : defaultCustomIcon;
        const {latitude, longitude} = point.location;
        const marker = new Marker({
          lat: latitude,
          lng: longitude
        });
        marker
          .setIcon(icon)
          .addTo(newLayer);
      });

      newLayer.addTo(map);

      return () => {
        map.removeLayer(newLayer);
      };
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
