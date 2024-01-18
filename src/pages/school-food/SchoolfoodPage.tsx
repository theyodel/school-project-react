import Footer from "../../components/Footer";

function SchoolfoodPage() {
  return (
    <>
      <title>Школьное Питание</title>

      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-row align-items-center justify-content-between">
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
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="https://foodmonitoring.ru/22393/food">Food</a>
                </li>
                <li>
                  <a href="/site-map">Карта Сайта</a>
                </li>
                <li>
                  <a href="/feedback">Обращения Граждан</a>
                </li>
                <li>
                  <a href="/feedback/faq">FAQ</a>
                </li>
                <li>
                  <a href="/school-food" className="active">
                    Школьное Питание
                  </a>
                </li>
                <li>
                  <a href="/helpful-links">Полезные Ссылки</a>
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

        <div className="div-path">
          <a href="/" className="a-path">
            Главная
          </a>
          <a className="path-dot">&middot;</a>
          <a href="/site-map" className="a-path-last">
            Школьное Питание
          </a>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default SchoolfoodPage;
