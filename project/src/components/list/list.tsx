import ListItem from '../../components/listitem/listitem';
import {OfferType} from '../../types/offers';

type ListProps = {
  offers: OfferType[];
  mouseOverHandler: (offer: OfferType | undefined) => void;
}

function List({offers, mouseOverHandler}: ListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <ListItem key={offer.id} offer={offer} mouseOverHandler={mouseOverHandler} />
      ))}
    </div>
  );
}

export default List;
