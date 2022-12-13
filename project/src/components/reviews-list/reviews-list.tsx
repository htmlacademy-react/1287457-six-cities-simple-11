import AddCommentForm from '../../components/add-comment-form/add-comment-form';
import Review from '../../components/review/review';
import {MAX_REVIEWS_COUNT} from '../../const';
import {sortReviewsByDate} from '../../common';
import {ReviewType} from '../../types/review-type';
import {useAppSelector} from '../../hooks/index';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type ReviewsListProps = {
  reviews: ReviewType[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const sortedReviews = sortReviewsByDate(reviews);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews ?
        <ul className="reviews__list">
          {sortedReviews.slice(0, MAX_REVIEWS_COUNT).map((review) => (
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
