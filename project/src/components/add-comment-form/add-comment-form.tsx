import {useState, ChangeEvent} from 'react';
import RatingStar from '../../components/rating-star/rating-star';
import {FormEvent} from 'react';
import {addSIfNeeded} from '../../common';
import {addReview} from '../../store/api-action';
import {useAppDispatch} from '../../hooks';
import {TComment} from '../../types/comment';
import {useParams} from 'react-router-dom';

function AddCommentForm(): JSX.Element {
  const MIN_REVIEW_LENGTH = 5;
  const dispatch = useAppDispatch();
  const {id} = useParams();

  const onSubmit = (reviewData: TComment) => {
    dispatch(addReview(reviewData));
  };

  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  const resetForm = () => {
    setFormData({
      rating: 0,
      review: '',
    });
  };
  {/* при выполнении этой функции звездочки рейтинга не перекрашиваются в серый, хотя в state видно, что rating стан 0. в чем ошибка? */}

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: Number(value)});
  };

  const commentChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const {review, rating} = formData;
    onSubmit({
      comment: review,
      rating: rating,
      offerId: Number(id)
    });
    resetForm();
  };

  const ratingTitles: string[] = [
    'perfect',
    'good',
    'not bad',
    'badly',
    'terribly',
  ];

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingTitles.map((title, index, array) => {
          const value = array.length - index;
          return (
            <RatingStar key={value} value={value} title={title} changeHandler={ratingChangeHandler} rating={formData.rating}/>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={commentChangeHandler} value={formData.review}></textarea>
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
