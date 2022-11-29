import AddCommentForm from '../../components/add-comment-form/add-comment-form';
import Review from '../../components/review/review';
import {TReview} from '../../types/review';

type ReviewsListProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews ?
        <ul className="reviews__list">
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ul>
        : null}
      <AddCommentForm />
    </section>
  );
}

export default ReviewsList;
