import {cities} from '../../mocks/cities';
import CitiesListItem from '../../components/cities-list-item/cities-list-item';

type CitiesListProps = {
  currentCity: string;
}

function CitiesList({currentCity}: CitiesListProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <CitiesListItem key={city.name} city={city} isActive={city.name === currentCity} />
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
