import List from '../../components/list/list';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import {useState} from 'react';
import {Offer} from '../../types/offer';
import {addSIfNeeded} from '../../common';
import {City} from '../../types/city';

type MainProps = {
  city: City;
  offers: Offer[];
}

function Main({city, offers}: MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer| undefined>();
  const handleActiveOffer = (offer: Offer | undefined): void => {
    setActiveOffer(offer);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} {addSIfNeeded(offers.length, 'place')} to stay in {city.name}</b>
        <Sort />
        <List offers={offers} mouseOverHandler={handleActiveOffer} />
      </section>
      <div className="cities__right-section">
        <Map activeOffer={activeOffer} city={city} points={offers} classPrefix={'cities'}/>
      </div>
    </div>
  );
}

export default Main;
