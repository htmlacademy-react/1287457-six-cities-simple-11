import {SORT_TYPES} from '../../const';
import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {setSortType} from '../../store/offers-process/offers-process';
import {getCurrentSortType} from '../../store/offers-process/selectors';

function Sort(): JSX.Element {
  const [isVisible, setVisibility] = useState<boolean>();
  const handleClick = (): void => {
    setVisibility(!isVisible);
  };

  const currentSortType = useAppSelector(getCurrentSortType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => handleClick()}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isVisible ? 'places__options--opened' : ''}`}>
        {SORT_TYPES.map((type) => (
          <li
            key={type}
            className={`places__option ${currentSortType === type ? 'places__option--active' : ''}`}
            onClick={() => {
              handleClick();
              dispatch(setSortType(type));
            }}
            tabIndex={0}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
