import SortItem from '../../components/sort-item/sort-item';
import {SORT_TYPES} from '../../const';
import {useState} from 'react';

type SortProps = {
  activeSortItem: typeof SORT_TYPES[number];
  setActiveSortItem: (item: typeof SORT_TYPES[number]) => void;
}

function Sort({activeSortItem, setActiveSortItem}: SortProps): JSX.Element {
  const [isVisible, setVisibility] = useState<boolean>();
  const handleClick = (): void => {
    setVisibility(!isVisible);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => handleClick()}>
        {activeSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isVisible ? 'places__options--opened' : ''}`}>
        {SORT_TYPES.map((type) => <SortItem key={type} sortItem={type} activeSortItem={activeSortItem} setActiveSortItem={setActiveSortItem} clickHandler={handleClick}/> )}
      </ul>
    </form>
  );
}

export default Sort;
