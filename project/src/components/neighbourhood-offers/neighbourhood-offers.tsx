import ListItem from '../../components/list-item/list-item';
import {Offer} from '../../types/offer';

type NeighbourhoodOffersProps = {
  offers: Offer[];
}

function NeighbourhoodOffers({offers}: NeighbourhoodOffersProps): JSX.Element {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <ListItem key={offer.id} offer={offer} classPrefix={'near-places'}/>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NeighbourhoodOffers;
