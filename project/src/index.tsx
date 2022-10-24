import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const LIST_ITEMS_COUNT = 5;

root.render(
  <React.StrictMode>
    <App listItemsCount={LIST_ITEMS_COUNT} />
  </React.StrictMode>,
);
