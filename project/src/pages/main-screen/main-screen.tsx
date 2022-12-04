import {useEffect} from 'react';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import MainEmpty from '../../components/main-empty/main-empty';
import Main from '../../components/main/main';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {loadOffersAction} from '../../store/api-action';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {isOffersLoaded, city, currentCityOffers} = useAppSelector((state) => state);
  const {name: cityName} = city;

  useEffect(() => {
    dispatch(loadOffersAction());
  }, []);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (

    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${!currentCityOffers.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={cityName} />
        </div>
        <div className="cities">
          {currentCityOffers.length ?
            <Main city={city} offers={currentCityOffers} />
            :
            <MainEmpty city={cityName} />}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
