import AddCommentForm from '../../components/add-comment-form/add-comment-form';
import Review from '../../components/review/review';
import {TReview} from '../../types/review';
import {useAppSelector} from '../../hooks/index';

type ReviewsListProps = {
  reviews: TReview[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);
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
      {authorizationStatus ?
        <AddCommentForm />
        : null}
    </section>
  );
}

export default ReviewsList;
