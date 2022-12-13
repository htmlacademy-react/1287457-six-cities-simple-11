import ListItem from '../../components/list-item/list-item';
import {Offer} from '../../types/offer';

type ListProps = {
  offers: Offer[];
  mouseOverHandler: (offer: Offer | undefined) => void;
}

function List({offers, mouseOverHandler}: ListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <ListItem key={offer.id} offer={offer} mouseOverHandler={mouseOverHandler} classPrefix={'cities'}/>
      ))}
    </div>
  );
}

export default List;
