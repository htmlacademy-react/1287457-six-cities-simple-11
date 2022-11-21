import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import MainEmpty from '../../components/main-empty/main-empty';
import Main from '../../components/main/main';
import {TOffer} from '../../types/offers';
import {TCity} from '../../types/city';
import {useAppSelector} from '../../hooks/index';

function MainScreen(): JSX.Element {
  const city: TCity = useAppSelector((state) => state.city);
  const offers: TOffer[] = useAppSelector((state) => state.offers);
  const {name: cityName} = city;

  return (
    <div className="page page--gray page--main">
      <Header logoActive showNav/>
      <main className={`page__main page__main--index ${!offers.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={cityName} />
        </div>
        <div className="cities">
          {offers.length ?
            <Main city={city} offers={offers} />
            :
            <MainEmpty city={cityName} />}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
