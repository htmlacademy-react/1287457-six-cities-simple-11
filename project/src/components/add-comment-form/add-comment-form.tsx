import {useState, ChangeEvent, Fragment} from 'react';

function AddCommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
    isDisabled: true,
  });

  const changeHandle = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
    {/* Вопрос: у нас есть кнопка submit, у которой должен появляться/убираться disabled в зависимости от того, есть ли отмеченный рейтинг и текст отзыва не менее 50 символов. Как реализовать эти проверки? */}
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
            <Fragment key={value}>
              <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={changeHandle}/>
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={changeHandle} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default AddCommentForm;
