import Footer from "../../components/Footer";
import logo from "/public/logo.svg";

function MapPage() {
  return (
    <>
      <title>Карта Сайта</title>

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
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="https://foodmonitoring.ru/22393/food">Food</a>
                </li>
                <li>
                  <a href="/site-map" className="active">
                    Карта Сайта
                  </a>
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
          <a href="/" className="a-path">
            Главная
          </a>
          <a className="path-dot">&middot;</a>
          <a href="/site-map" className="a-path-last">
            Карта сайта
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">Карта Сайта</h1>
        </div>

        <div className="map-grid">
          <a className="a-map-main" href="/">
            Главная
          </a>
          <a className="a-map-main" href="https://foodmonitoring.ru/22393/food">
            Food
          </a>
          <a className="a-map-main" href="/feedback">
            Обращения Граждан
          </a>
          <a className="a-map-main" href="/feedback/faq">
            Часто задаваемые вопросы (FAQ)
          </a>
          <a className="a-map-main">Школьное Питание</a>
          <a href="/helpful-links" className="a-map-main">
            Полезные Ссылки
          </a>

          <a className="a-map-main" href="/basic-information">
            Сведения об образовательной организации
          </a>
          <a className="a-map-thread" href="/basic-information/school-history">
            История школы
          </a>
          <a
            className="a-map-thread"
            href="/basic-information/structure-and-management"
          >
            Структура и органы управления образовательной организацией
          </a>
          <a className="a-map-thread">Документы</a>
          <a className="a-map-thread" href="/basic-information/education">
            Образование
          </a>
          <a href="/basic-information/staff" className="a-map-thread">
            Руководство. Педагогический состав
          </a>
          <a
            className="a-map-thread"
            href="/basic-information/technical-equipment"
          >
            Материально-техническое обеспечение и оснащенность образовательного
            процесса
          </a>
          <a
            className="a-map-thread"
            href="/basic-information/technical-equipment/dnevnik.ru"
          >
            Электронный дневник
          </a>
          <a
            className="a-map-thread"
            href="/basic-information/support-measures"
          >
            Стипендии и меры поддержки
          </a>
          <a
            className="a-map-thread"
            href="https://bus.gov.ru/agency/243209/plans"
          >
            Финансово-хозяйственная деятельность
          </a>
          <a className="a-map-thread" href="/basic-information/vacancies">
            Вакантные места для приема (перевода)
          </a>
          <a className="a-map-thread">Доступная среда</a>

          <a className="a-map-main">Обучающимся</a>
          <a className="a-map-thread">Школьная служба примирения</a>
          <a
            className="a-map-thread"
            href="https://www.culture.ru/pushkinskaya-karta/afisha/arhangelskaya-oblast-severodvinsk"
          >
            Пушкинская карта. Афиша культурных мероприятий Северодвинска.
          </a>

          <a className="a-map-main">Родителям</a>
          <a href="https://edu.gov.ru/press/news/" className="a-map-thread">
            Новости Минпросвещения России
          </a>
          <a className="a-map-thread">ОРКСЭ</a>
          <a className="a-map-thread">О добровольном труде и пожертвованиях</a>
          <a className="a-map-thread">Бланки заявлений</a>

          <a className="a-map-main">Всероссийская Олимпиада Школьников</a>

          <a className="a-map-main">ГИА</a>
          <a className="a-map-thread">ГИА 9</a>
          <a className="a-map-thread">ГИА 11</a>

          <a className="a-map-main">ВПР</a>

          <a className="a-map-main">Безопасность школьника</a>
          <a className="a-map-thread">Осторожно, терроризм!</a>
          <a className="a-map-thread">
            Безопасность в быту и на улице, пожарная безопасность
          </a>
          <a className="a-map-thread">Нет наркотикам</a>
          <a className="a-map-thread">Телефоны экстренных служб</a>
          <a className="a-map-thread">Безопасность дорожного движения</a>
          <a className="a-map-thread">Безопасность на водных объектах</a>
          <a className="a-map-thread">Профилактика заболеваний</a>
          <a className="a-map-thread">Безопасность на ЖД</a>

          <a className="a-map-main">Информационная безопасность</a>
          <a className="a-map-thread">Нормативное регулирование</a>
          <a className="a-map-thread">Локальные нормативные акты</a>
          <a className="a-map-thread">Педагогам</a>
          <a className="a-map-thread">Обучающимся</a>
          <a className="a-map-thread">Родителям</a>
          <a className="a-map-thread">Детские безопасные сайты</a>

          <a className="a-map-main">Отдых, оздоровление и занятость детей</a>
          <a href="" className="a-map-thread">
            Смена 2023
          </a>
          <a href="" className="a-map-thread">
            Документы по лагерю
          </a>

          <a className="a-map-main">Приём в школу</a>

          <a className="a-map-main">Школьный спортивный клуб</a>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default MapPage;
