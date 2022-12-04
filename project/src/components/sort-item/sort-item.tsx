import {SORT_TYPES} from '../../const';

type SortItemProps = {
  activeSortItem: typeof SORT_TYPES[number];
  sortItem: typeof SORT_TYPES[number];
  setActiveSortItem: (item: typeof SORT_TYPES[number]) => void;
  clickHandler: () => void;
}

function SortItem({activeSortItem, sortItem, setActiveSortItem, clickHandler}: SortItemProps): JSX.Element {

  return (
    <li className={`places__option ${activeSortItem === sortItem ? 'places__option--active' : ''}`} onClick={() => {setActiveSortItem(sortItem); clickHandler();}} tabIndex={0}>{sortItem}</li>
  );
}

export default SortItem;
