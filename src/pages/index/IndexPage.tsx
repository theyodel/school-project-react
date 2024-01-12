import Footer from "../../components/Footer";

function IndexPage() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="logo">
              <a href="/">
                <img src="/public/logo.png" alt="logo" />
              </a>
            </div>
            <input type="checkbox" id="nav-check" />
            <label htmlFor="nav-check" className="nav-toggler">
              <span></span>
            </label>
            <nav className="nav">
              <ul>
                <li>
                  <a href="/" className="active">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="https://foodmonitoring.ru/22393/food">Food</a>
                </li>
                <li>
                  <a href="/">Карта Сайта</a>
                </li>
                <li>
                  <a href="/">Обращения Граждан</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Школьное Питание</a>
                </li>
                <li>
                  <a href="/">Полезные Ссылки</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="div-name">
          <img className="name-img" src="/public/logo.png" alt="logo" />
          <p className="h2-name">
            Муниципальное автономное общеобразовательное учреждение
            <h2 className="h1-name">
              «Средняя общеобразовательная школа № 6 с углубленным изучением
              иностранных языков»
            </h2>
          </p>
        </div>
        <hr className="hr-main" />

        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
