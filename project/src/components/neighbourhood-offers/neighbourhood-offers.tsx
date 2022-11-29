import ListItem from '../../components/listitem/listitem';
import {TOffer} from '../../types/offers';

type NeighbourhoodOffersProps = {
  offers: TOffer[];
  mouseOverHandler: (offer: TOffer | undefined) => void;
}

function NeighbourhoodOffers({offers, mouseOverHandler}: NeighbourhoodOffersProps): JSX.Element {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <ListItem key={offer.id} offer={offer} mouseOverHandler={mouseOverHandler} classPrefix={'near-places'}/>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NeighbourhoodOffers;
