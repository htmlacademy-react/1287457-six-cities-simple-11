import AddCommentForm from '../../components/add-comment-form/add-comment-form';
import Review from '../../components/review/review';
import {ReviewType} from '../../types/review-type';
import {useAppSelector} from '../../hooks/index';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type ReviewsListProps = {
  reviews: ReviewType[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
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
