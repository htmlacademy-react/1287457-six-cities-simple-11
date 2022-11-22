function LoadingScreen(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <main className='page__main page__main--index'>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <img src="img/preloader.gif" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
        </div>
      </main>
    </div>
  );
}

export default LoadingScreen;
