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
                  <a href="/site-map">Карта Сайта</a>
                </li>
                <li>
                  <a href="/feedback">Обращения Граждан</a>
                </li>
                <li>
                  <a href="/feedback/faq">FAQ</a>
                </li>
                <li>
                  <a href="/school-food">Школьное Питание</a>
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
          <a href="/" className="a-path a-path-last">
            Главная
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">Главная Страница</h1>
          <br />
          <br />
          <p className="page-text bold">Вы находитесь на сайте МАОУ «СОШ №6»</p>
          <br />
          <p className="page-text">
            Школа № 6 открыта 1 сентября 1980 года как средняя
            общеобразовательная. Образовательная организация структурных
            подразделений (общежитий, интерната) не имеет.
          </p>
          <br />
          <br />
          <p className="page-comment">Фотографии МАОУ «СОШ №6»:</p>
          <img src="/public/img1.jpg" alt="фотография" className="page-img" />
        </div>

        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
