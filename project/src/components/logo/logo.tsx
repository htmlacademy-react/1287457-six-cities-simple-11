import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type LogoProps = {
  logoActive?: boolean;
}

function Logo({logoActive}: LogoProps): JSX.Element {
  return (
    <Link to={!logoActive ? AppRoute.Root : ''} className={`header__logo-link ${logoActive ? 'header__logo-link--active' : ''}`}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
