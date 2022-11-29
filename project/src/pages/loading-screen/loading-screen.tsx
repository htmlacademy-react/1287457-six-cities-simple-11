import './loading-screen.css';

function LoadingScreen(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <main className='page__main page__main--index'>
        <div className="cities">
          <img src="img/preloader.gif" className="preloader" />
        </div>
      </main>
    </div>
  );
}

export default LoadingScreen;
