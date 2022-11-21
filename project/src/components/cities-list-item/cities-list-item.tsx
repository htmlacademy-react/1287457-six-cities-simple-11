import {MouseEvent} from 'react';
import {setCity, setOffers} from '../../store/action';
import {useAppDispatch} from '../../hooks/index';
import {getOffersByCity} from '../../common';
import {offers} from '../../mocks/offers';
import {TCity} from '../../types/city';

type CitiesListItemProps = {
  city: TCity;
  isActive?: boolean;
}

function CitiesListItem({city, isActive}: CitiesListItemProps): JSX.Element {
  const {name} = city;
  const dispatch = useAppDispatch();

  const handleCityClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(setCity(city));
    dispatch(setOffers(getOffersByCity(name, offers)));
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
