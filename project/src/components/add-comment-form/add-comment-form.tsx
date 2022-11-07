import {useState, ChangeEvent} from 'react';
import RatingStar from '../../components/rating-star/rating-star';
import {addSIfNeeded} from '../../common';

function AddCommentForm(): JSX.Element {
  const MIN_REVIEW_LENGTH = 50;

  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const changeHandler = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const ratingTitles: string[] = [
    'perfect',
    'good',
    'not bad',
    'badly',
    'terribly',
  ];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingTitles.map((title, index, array) => {
          const value = array.length - index;
          return (
            <RatingStar key={value} value={value} title={title} changeHandler={changeHandler} />
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={changeHandler} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} {addSIfNeeded(MIN_REVIEW_LENGTH, 'character')}</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.review.length < MIN_REVIEW_LENGTH || !formData.rating}>Submit</button>
      </div>
    </form>
  );
}

export default AddCommentForm;
