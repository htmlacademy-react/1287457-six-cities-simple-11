import List from '../../components/list/list';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import {useState} from 'react';
import {TOffer} from '../../types/offers';
import {addSIfNeeded, sort} from '../../common';
import {TCity} from '../../types/city';
import {SORT_TYPES} from '../../const';

type MainProps = {
  city: TCity;
  offers: TOffer[];
}

function Main({city, offers}: MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffer| undefined>();
  const handleActiveOffer = (offer: TOffer | undefined): void => {
    setActiveOffer(offer);
  };
  const [activeSortItem, setActiveSortItem] = useState<typeof SORT_TYPES[number]>(SORT_TYPES[0]);
  const handleSortItem = (item: typeof SORT_TYPES[number]): void => {
    setActiveSortItem(item);
  };

  offers = sort(offers, activeSortItem);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} {addSIfNeeded(offers.length, 'place')} to stay in {city.name}</b>
        <Sort activeSortItem={activeSortItem} setActiveSortItem={handleSortItem}/>
        <List offers={offers} mouseOverHandler={handleActiveOffer} />
      </section>
      <div className="cities__right-section">
        <Map activeOffer={activeOffer} city={city} points={offers} classPrefix={'cities'}/>
      </div>
    </div>
  );
}

export default Main;
