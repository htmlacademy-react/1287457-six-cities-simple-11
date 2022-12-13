import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {formatRating} from '../../common';

type ListItemProps = {
  offer: Offer;
  mouseOverHandler?: (offer?: Offer) => void;
  classPrefix: string;
}

function ListItem({offer, mouseOverHandler, classPrefix}: ListItemProps): JSX.Element {
  const {id, isPremium, images, price, rating, title, type} = offer;

  return (
    <article
      key={id}
      className={`${classPrefix}__card place-card`}
      onMouseOver={() => mouseOverHandler?.(offer)}
      onMouseOut={() => mouseOverHandler?.()}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" />
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
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default ListItem;
