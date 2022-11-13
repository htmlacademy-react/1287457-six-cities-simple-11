import {MouseEvent} from 'react';
import {setCity, setOffers} from '../../store/action';
import {store} from '../../store/index';
import {getOffersByCity} from '../../common';
import {offers} from '../../mocks/offers';
import {CityType} from '../../types/city';

type CitiesListItemProps = {
  city: CityType;
  isActive?: boolean;
}

function CitiesListItem({city, isActive}: CitiesListItemProps): JSX.Element {
  const {name} = city;

  const handleCityClick = (evt: MouseEvent) => {
    evt.preventDefault();
    store.dispatch(setCity(city));
    store.dispatch(setOffers(getOffersByCity(name, offers)));
  };

  return (
    <li className="locations__item">
      <a onClick={handleCityClick} className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}>
        <span>{name}</span>
      </a>
    </li>
  );
}

export default CitiesListItem;
