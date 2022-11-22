import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import Page404Screen from '../../pages/page404-screen/page404-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {TReview} from '../../types/review';
import {useAppSelector} from '../../hooks/index';

type AppProps = {
  reviews: TReview[];
}

function App({reviews}: AppProps): JSX.Element {
  const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} index element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferScreen reviews={reviews} />} />
        <Route path={AppRoute.Page404} element={<Page404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
