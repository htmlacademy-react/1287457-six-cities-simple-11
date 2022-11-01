import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import Page404Screen from '../../pages/page404-screen/page404-screen';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

type AppProps = {
  listItemsCount: number;
}

function App({listItemsCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} index element={<MainScreen listItemsCount={listItemsCount} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
        <Route path={AppRoute.Page404} element={<Page404Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
