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

          <p className="page-text">
            МАОУ Средняя общеобразовательная школа № 6 с углубленным изучением
            иностранных языков в Северодвинске является одним из ведущих
            образовательных учреждений города. Продолжает показывать по
            сегодняшний день отличные результаты в Северодвинске и обеспечении
            оптимальных условий для самореализации и развития учащихся.
          </p>
          <br />
          <br />

          <br />
          <br />
          <p className="page-text bold">Новости и События</p>

          <br />

          <div className="row">
            <div className="col-3">
              <div className="card-place">
                <div className="card">
                  <img src="public/news-1.jpg" alt="Avatar" />
                  <div className="card-container">
                    <h4>
                      <b>Всемирный день снеговика.</b>
                    </h4>
                    <div className="div-description">
                      <p className="card-description">
                        Описаниееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееее
                      </p>
                    </div>
                    <div className="card-footer">
                      <p className="card-category">
                        <abbr data-title="Категория: Новости">Новости</abbr>
                      </p>
                      <p className="card-dot">|</p>
                      <p className="card-date">
                        <abbr data-title="16 января 2024г">16 янв. 2024</abbr>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-place">
                <div className="card">
                  <img src="public/news-1.jpg" alt="Avatar" />
                  <div className="card-container">
                    <h4>
                      <b>Всемирный день снеговика.</b>
                    </h4>
                    <div className="div-description">
                      <p className="card-description">
                        Описаниееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееее
                      </p>
                    </div>
                    <div className="card-footer">
                      <p className="card-category">
                        <abbr data-title="Категория: События">События</abbr>
                      </p>
                      <p className="card-dot">|</p>
                      <p className="card-date">
                        <abbr data-title="16 января 2024г">16 янв. 2024</abbr>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card-place">
                <div className="card">
                  <img src="public/news-1.jpg" alt="Avatar" />
                  <div className="card-container">
                    <h4>
                      <b>Всемирный день снеговика.</b>
                    </h4>
                    <div className="div-description">
                      <p className="card-description">
                        Описаниееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееееее
                      </p>
                    </div>
                    <div className="card-footer">
                      <p className="card-category">
                        <abbr data-title="Категория: Новости">Новости</abbr>
                      </p>
                      <p className="card-dot">|</p>
                      <p className="card-date">
                        <abbr data-title="16 января 2024г">16 янв. 2024</abbr>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
