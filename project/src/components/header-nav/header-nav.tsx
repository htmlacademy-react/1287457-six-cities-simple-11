import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {logoutUser} from '../../store/api-action';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';

function HeaderNav(): JSX.Element {
  const isUserLogged = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isUserLogged ?
          <>
            <li className="header__nav-item user">
              <div className="header__nav-profile">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">{user ? user.email : null}</span>
              </div>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#" onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutUser());
              }}
              >
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
          :
          <li className="header__nav-item">
            <Link to={AppRoute.Login} className="header__nav-link">
              <span className="header__signout">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default HeaderNav;
