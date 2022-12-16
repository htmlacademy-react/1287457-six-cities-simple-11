import Header from '../../components/header/header';
import {useRef, FormEvent, MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Auth} from '../../types/auth';
import {loginUser} from '../../store/api-action';
import {redirectToRoute} from '../../store/action';
import {PASSWORD_MASK, AppRoute} from '../../const';
import {getRandomCity} from '../../common';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {Navigate} from 'react-router-dom';
import {setCity} from '../../store/offers-process/offers-process';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const randomCity = getRandomCity();

  const onSubmit = (authData: Auth) => {
    if (authData.password.match(PASSWORD_MASK)) {
      dispatch(loginUser(authData));
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value
      });
    }
  };

  const handleCityClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(setCity(randomCity));
    dispatch(redirectToRoute(AppRoute.Root));
  };

  if (authorizationStatus) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a onClick={handleCityClick} className="locations__item-link" href="#">
                <span>{randomCity.name}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
