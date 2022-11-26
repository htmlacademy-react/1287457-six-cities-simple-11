import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import Page404Screen from '../../pages/page404-screen/page404-screen';
import {Routes, Route} from 'react-router-dom';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {TReview} from '../../types/review';

type AppProps = {
  reviews: TReview[];
}

function App({reviews}: AppProps): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} index element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferScreen reviews={reviews} />} />
        <Route path={AppRoute.Page404} element={<Page404Screen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
