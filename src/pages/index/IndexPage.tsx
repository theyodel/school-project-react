import Footer from "../../components/Footer";
import logo from "/public/logo.svg";

function IndexPage() {
  return (
    <>
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-row align-items-center justify-content-between">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
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
          <p className="category-title">Вы находитесь на сайте МАОУ «СОШ №6»</p>

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
          <p className="category-title">Новости и События</p>

          <div className="cccard__container">
            <div className="cccard">
              <img src="/public/news-1.jpg" />
              <div className="cccard__data">
                <h3>Title</h3>
                <p>Some description</p>
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

            <div className="cccard__container">
              <div className="cccard">
                <img src="/public/news-1.jpg" />
                <div className="cccard__data">
                  <h3>Title</h3>
                  <p>Some description</p>
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
            <div className="cccard__container">
              <div className="cccard">
                <img src="/public/news-1.jpg" />
                <div className="cccard__data">
                  <h3>Title</h3>
                  <p>Some description</p>
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
            <div className="cccard__container">
              <div className="cccard">
                <img src="/public/news-1.jpg" />
                <div className="cccard__data">
                  <h3>Title</h3>
                  <p>Some description</p>
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
            <div className="cccard__container">
              <div className="cccard">
                <img src="/public/news-1.jpg" />
                <div className="cccard__data">
                  <h3>Title</h3>
                  <p>Some description</p>
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

        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
