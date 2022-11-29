import ListItem from '../../components/listitem/listitem';
import {TOffer} from '../../types/offers';

type ListProps = {
  offers: TOffer[];
  mouseOverHandler: (offer: TOffer | undefined) => void;
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
