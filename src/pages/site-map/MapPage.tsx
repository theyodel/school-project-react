import Footer from "../../components/Footer";
import logo from "/logo.png";
import { Link } from "react-router-dom";

function MapPage() {
  return (
    <>
      <title>Карта Сайта</title>

      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-row align-items-center justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <input type="checkbox" id="nav-check" />
            <label htmlFor="nav-check" className="nav-toggler">
              <span></span>
            </label>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <a
                    href="https://foodmonitoring.ru/22393/food"
                    target="_blank"
                  >
                    Food
                  </a>
                </li>
                <li>
                  <Link to="/site-map" className="active">
                    Карта Сайта
                  </Link>
                </li>
                <li>
                  <Link to="/feedback">Обращения Граждан</Link>
                </li>
                <li>
                  <Link to="/feedback/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/school-food">Школьное Питание</Link>
                </li>
                <li>
                  <Link to="/helpful-links">Полезные Ссылки</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="div-name">
          <img className="name-img" src="/logo.png" alt="logo" />
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
          <Link to="/" className="a-path">
            Главная
          </Link>
          <a className="path-dot">&middot;</a>
          <Link to="/site-map" className="a-path-last">
            Карта сайта
          </Link>
        </div>

        <div className="page-content">
          <h1 className="page-title">Карта Сайта</h1>
          <br />
          <br />

          <div className="map-grid">
            <Link className="a-map-main" to="/">
              Главная
            </Link>
            <Link
              className="a-map-main"
              target="_blank"
              to="https://foodmonitoring.ru/22393/food"
            >
              Food
            </Link>
            <Link className="a-map-main" to="/feedback">
              Обращения Граждан
            </Link>
            <Link className="a-map-main" to="/feedback/faq">
              Часто задаваемые вопросы (FAQ)
            </Link>
            <Link className="a-map-main" to="/school-food">
              Школьное Питание
            </Link>
            <Link to="/helpful-links" className="a-map-main">
              Полезные Ссылки
            </Link>

            <Link className="a-map-main" to="/basic-information">
              Сведения об образовательной организации
            </Link>
            <Link
              className="a-map-thread"
              to="/basic-information/school-history"
            >
              История школы
            </Link>
            <Link
              className="a-map-thread"
              to="/basic-information/structure-and-management"
            >
              Структура и органы управления образовательной организацией
            </Link>
            <Link className="a-map-thread" to="/basic-information/documents">
              Документы
            </Link>
            <Link className="a-map-thread" to="/basic-information/education">
              Образование
            </Link>
            <Link to="/basic-information/staff" className="a-map-thread">
              Руководство. Педагогический состав
            </Link>
            <Link
              className="a-map-thread"
              to="/basic-information/technical-equipment"
            >
              Материально-техническое обеспечение и оснащенность
              образовательного процесса
            </Link>
            <Link
              className="a-map-thread"
              to="/basic-information/technical-equipment/dnevnik.ru"
            >
              Электронный дневник
            </Link>
            <Link
              className="a-map-thread"
              to="/basic-information/support-measures"
            >
              Стипендии и меры поддержки
            </Link>
            <Link
              className="a-map-thread"
              to="https://bus.gov.ru/Linkgency/243209/plans"
            >
              Финансово-хозяйственная деятельность
            </Link>
            <Link className="a-map-thread" to="/basic-information/vacancies">
              Вакантные места для приема (перевода)
            </Link>
            <Link
              className="a-map-thread"
              to="/basic-information/available-environment"
            >
              Доступная среда
            </Link>

            <Link className="a-map-main" to="/for-students">
              Обучающимся
            </Link>
            <Link
              className="a-map-thread"
              to="for-students/reconciliation-service"
            >
              Школьная служба примирения
            </Link>
            <Link
              className="a-map-thread"
              to="https://www.culture.ru/pushkinskaya-karta/afisha/arhangelskaya-oblast-severodvinsk"
            >
              Пушкинская карта. Афиша культурных мероприятий Северодвинска.
            </Link>

            <Link className="a-map-main" to="/for-parents">
              Родителям
            </Link>
            <Link to="https://edu.gov.ru/press/news/" className="a-map-thread">
              Новости Минпросвещения России
            </Link>
            <Link className="a-map-thread" to="/for-parents/ORKSE">
              ОРКСЭ
            </Link>
            <Link className="a-map-thread" to="/for-parents/about-donates">
              О добровольном труде и пожертвованиях
            </Link>
            <Link className="a-map-thread" to="/for-parents/application-forms">
              Бланки заявлений
            </Link>

            <Link className="a-map-main" to="/allrussian-olympiad">
              Всероссийская Олимпиада Школьников
            </Link>

            <Link to="/gia" className="a-map-main">
              ГИА
            </Link>
            <Link to="/gia/oge" className="a-map-thread">
              ГИА 9
            </Link>
            <Link to="/gia/ege" className="a-map-thread">
              ГИА 11
            </Link>

            <Link to="" className="a-map-main">
              ВПР
            </Link>

            <Link to="" className="a-map-main">
              Безопасность школьника
            </Link>
            <Link to="" className="a-map-thread">
              Осторожно, терроризм!
            </Link>
            <Link to="" className="a-map-thread">
              Безопасность в быту и на улице, пожарная безопасность
            </Link>
            <Link to="" className="a-map-thread">
              Нет наркотикам
            </Link>
            <Link to="" className="a-map-thread">
              Телефоны экстренных служб
            </Link>
            <Link to="" className="a-map-thread">
              Безопасность дорожного движения
            </Link>
            <Link to="" className="a-map-thread">
              Безопасность на водных объектах
            </Link>
            <Link to="" className="a-map-thread">
              Профилактика заболеваний
            </Link>
            <Link to="" className="a-map-thread">
              Безопасность на ЖД
            </Link>

            <Link to="" className="a-map-main">
              Информационная безопасность
            </Link>
            <Link to="" className="a-map-thread">
              Нормативное регулирование
            </Link>
            <Link to="" className="a-map-thread">
              Локальные нормативные акты
            </Link>
            <Link to="" className="a-map-thread">
              Педагогам
            </Link>
            <Link to="" className="a-map-thread">
              Обучающимся
            </Link>
            <Link to="" className="a-map-thread">
              Родителям
            </Link>
            <Link to="" className="a-map-thread">
              Детские безопасные сайты
            </Link>

            <Link to="" className="a-map-main">
              Отдых, оздоровление и занятость детей
            </Link>
            <Link to="" className="a-map-thread">
              Смена 2023
            </Link>
            <Link to="" className="a-map-thread">
              Документы по лагерю
            </Link>

            <Link to="" className="a-map-main">
              Приём в школу
            </Link>

            <Link to="" className="a-map-main">
              Школьный спортивный клуб
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default MapPage;
