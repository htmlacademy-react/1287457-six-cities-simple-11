import List from '../../components/list/list';
import Map from '../../components/map/map';
import {useState} from 'react';
import {TOffer} from '../../types/offers';
import {addSIfNeeded} from '../../common';
import {TCity} from '../../types/city';

type MainProps = {
  city: TCity;
  offers: TOffer[];
}

function Main({city, offers}: MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffer| undefined>();
  const handleActiveOffer = (offer: TOffer | undefined): void => {
    setActiveOffer(offer);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} {addSIfNeeded(offers.length, 'place')} to stay in {city.name}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <List offers={offers} mouseOverHandler={handleActiveOffer} />
      </section>
      <div className="cities__right-section">
        <Map activeOffer={activeOffer} city={city} points={offers} />
        {/* Отели есть только в Париже и Амстердаме. Если переключиться между ними напрямую - карта не перерисуется. Если переключиться через какой-нибудь другой город, где точек нет, то карта отобразится правильно. В чем причина? Пробовал передавать city и offers через пропсы, пробовал вытаскивать их внутри компонента Map через useAppSelector (как на странице main-screen) - без разницы, карта не перерисовывается */}
      </div>
    </div>
  );
}

export default Main;
