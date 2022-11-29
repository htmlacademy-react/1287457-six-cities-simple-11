import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

function Header(): JSX.Element {
  const location = useLocation();
  const path = location.pathname;
  const logoActive = path === AppRoute.Root;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoActive={logoActive}/>
          </div>
          {path !== AppRoute.Login ? <HeaderNav /> : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
