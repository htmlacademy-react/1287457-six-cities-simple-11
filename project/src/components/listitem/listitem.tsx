import {TOffer} from '../../types/offers';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {formatRating} from '../../common';

type ListItemProps = {
  offer: TOffer;
  mouseOverHandler: (offer?: TOffer) => void;
}

function ListItem({offer, mouseOverHandler}: ListItemProps): JSX.Element {
  const {id, isPremium, mainImage, price, rating, name, type} = offer;

  return (
    <article key={id} className="cities__card place-card" onMouseOver={() => mouseOverHandler(offer)} onMouseOut={() => mouseOverHandler()}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={mainImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: formatRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default ListItem;
