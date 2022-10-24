import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  listItemsCount: number;
}

function App({listItemsCount}: AppProps): JSX.Element {
  return <MainScreen listItemsCount={listItemsCount} />;
}

export default App;
