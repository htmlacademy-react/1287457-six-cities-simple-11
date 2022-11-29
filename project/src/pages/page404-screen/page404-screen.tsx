import Header from '../../components/header/header';
import {Link} from 'react-router-dom';

function Page404Screen(): JSX.Element {

  return (
    <div className="page page--gray">
      <Header />

      <main className="page__main" style={{textAlign: 'center'}}>
        <h1>Страница не найдена</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default Page404Screen;
