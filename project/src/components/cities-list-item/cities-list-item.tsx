import {MouseEvent} from 'react';
import {setCity} from '../../store/offers-process/offers-process';
import {useAppDispatch} from '../../hooks/index';
import {City} from '../../types/city';

type CitiesListItemProps = {
  city: City;
  isActive?: boolean;
}

function CitiesListItem({city, isActive}: CitiesListItemProps): JSX.Element {
  const {name} = city;
  const dispatch = useAppDispatch();

  const handleCityClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(setCity(city));
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
