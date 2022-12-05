import {useState, useEffect} from 'react';
import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import {TOffer} from '../../types/offers';
import Page404Screen from '../../pages/page404-screen/page404-screen';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NeighbourhoodOffers from '../../components/neighbourhood-offers/neighbourhood-offers';
import {formatRating, addSIfNeeded} from '../../common';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import Map from '../../components/map/map';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {loadOfferAction, loadReviewsAction, loadNearbyOffersAction} from '../../store/api-action';

function OfferScreen(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffer| undefined>();
  const handleActiveOffer = (actOffer: TOffer | undefined): void => {
    setActiveOffer(actOffer);
  };
  const dispatch = useAppDispatch();
  const {currentOffer, isOfferLoaded, reviews, nearbyOffers} = useAppSelector((state) => state);
  const {id} = useParams();
  const numbId = Number(id);
  {/* из useParams id приходит в виде строки. можно ли преобразовать его в число налету без использования дополнительной переменной? */}

  useEffect(() => {
    dispatch(loadOfferAction(numbId));
    dispatch(loadReviewsAction(numbId));
    dispatch(loadNearbyOffersAction(numbId));
  }, [id]);

  if (isOfferLoaded === undefined) {
    return (
      <LoadingScreen />
    );
  }

  if (!currentOffer) {
    return <Page404Screen />;
  }
  const {isPremium, price, rating, title, type, bedrooms, maxAdults, images, goods, host, description, city} = currentOffer;
  const {name: hostName, avatarUrl, isPro} = host;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            {images ?
              <div className="property__gallery">
                {images.map((image) => (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))}
              </div>
              : null}
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: formatRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {addSIfNeeded(bedrooms, 'Bedroom')}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {addSIfNeeded(maxAdults, 'adult')}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {goods ?
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                : null}
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {hostName}
                  </span>
                  <span className="property__user-status">
                    {isPro}
                  </span>
                </div>
                <div className="property__description" dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <ReviewsList reviews={reviews}/>
            </div>
          </div>
          <Map activeOffer={activeOffer} city={city} points={nearbyOffers} classPrefix={'property'}/>
        </section>
        {nearbyOffers ?
          <NeighbourhoodOffers offers={nearbyOffers} mouseOverHandler={handleActiveOffer}/>
          :
          null}
      </main>
    </div>
  );
}

export default OfferScreen;
