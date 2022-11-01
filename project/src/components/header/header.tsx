import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

type HeaderProps = {
  logoActive?: boolean;
  showNav?: boolean;
}

function Header({logoActive, showNav}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoActive={logoActive}/>
          </div>
          {showNav ? <HeaderNav /> : ''}
        </div>
      </div>
    </header>
  );
}

export default Header;
