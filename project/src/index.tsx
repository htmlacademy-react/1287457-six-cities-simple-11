import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store/index';
import {loadOffersAction} from './store/api-action';

store.dispatch(loadOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
);
