import ListItem from '../../components/listitem/listitem';
import {OfferType} from '../../types/offers';
import {useState} from 'react';

type ListProps = {
  offers: OfferType[];
}

function List({offers}: ListProps): JSX.Element {
  const [, setActiveOffer] = useState({});
  const handleActiveOffer = (offer: OfferType): void => {
    setActiveOffer(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <ListItem key={offer.id} offer={offer} mouseOverHandler={handleActiveOffer} />
      ))}
    </div>
  );
}

export default List;
