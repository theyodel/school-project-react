import Footer from "../../components/Footer";
import logo from "/public/logo.svg";

function LinksPage() {
  return (
    <>
      <title>Полезные Ссылки</title>

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
                  <a href="/helpful-links" className="active">
                    Полезные Ссылки
                  </a>
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
          <a href="/helpful-links" className="a-path-last">
            Полезные ссылки
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">Полезные Ссылки</h1>
          <br />
          <br />

          <p>
            <a href="https://edu.gov.ru/" className="page-link">
              Министерство просвещения Российской Федерации
            </a>
          </p>

          <br />

          <p>
            <a href="https://minobrnauki.gov.ru/" className="page-link">
              Министерство науки и высшего образования Российской Федерации
            </a>
          </p>

          <br />

          <p className="page-text">
            <a href="https://урок.рф/" className="page-link">
              УРОК.РФ
            </a>{" "}
            — педагогическое сообщество, предназначенное для работников
            школьного, дошкольного и дополнительного образования, а также для
            всех специалистов, занимающихся образовательной и воспитательной
            деятельностью.
          </p>

          <br />

          <p className="page-text">
            <a href="https://fipi.ru/" className="page-link">
              ФИПИ
            </a>{" "}
            — сайт Федерального института педагогических измерений, на котором
            уже размещены демоверсии ОГЭ и ЕГЭ 2021 года и опубликованы открытые
            банки заданий ГИА.
          </p>

          <br />

          <p className="page-text">
            <a href="https://1сентября.рф/" className="page-link">
              1сентября.рф
            </a>{" "}
            — известный издательский дом предлагает учителям более десятка
            уникальных проектов: фестиваль методических разработок, конкурсы,
            курсы повышения квалификации, вебинары, онлайн-выставки.
          </p>

          <br />

          <p className="page-text">
            <a href="https://school-collection.edu.ru/" className="page-link">
              school-collection.edu.ru
            </a>
            — единая коллекция цифровых образовательных ресурсов.
          </p>

          <br />

          <p className="page-text">
            <a href="https://ict.edu.ru/" className="page-link">
              ict.edu.ru
            </a>{" "}
            — федеральный образовательный портал «Информационно-коммуникационные
            технологии в образовании».
          </p>

          <br />

          <p className="page-text">
            <a href="https://pedsovet.org/" className="page-link">
              pedsovet.org
            </a>{" "}
            — всероссийский интернет-педсовет.
          </p>

          <br />

          <p className="page-text">
            <a href="https://skysmart.ru/" className="page-link">
              SkySmart
            </a>{" "}
            — онлайн-школа для детей и подростков.
          </p>

          <br />

          <p className="page-text">
            <a href="https://фоксфорд.ру/" className="page-link">
              Фоксфорд.ру
            </a>{" "}
            — возможность пройти бесплатное дистанционное обучение у экспертов
            МГУ, МФТИ, ВШЭ и других ведущих вузов страны.
          </p>

          <br />

          <p className="page-text">
            <a href="https://interneturok.ru/" className="page-link">
              interneturok.ru
            </a>{" "}
            — открытые уроки по всем предметам школьной программы, содержат
            тесты, тренажеры и конспекты. Учитель найдет готовые материалы для
            урока, может послушать видеолекции по детской психологии.
          </p>

          <br />

          <p className="page-text">
            <a
              href="https://youtube.com/user/Drofapublishing"
              className="page-link"
            >
              Youtube-канал Drofapublishing
            </a>{" "}
            — архив вебинаров авторов учебников, ученых, преподавателей,
            учителей-практиков, открытые уроки, интервью с ведущими
            специалистами.
          </p>

          <br />

          <p className="page-text">
            <a href="https://media.prosv.ru/" className="page-link">
              Медиатека «Просвещения»
            </a>{" "}
            — это электронные учебники издательства, а также доступ к другим
            полезным материалам: рабочим программам, методическим пособиям,
            курсам повышения квалификации, интерактивным рабочим тетрадям.
          </p>

          <br />

          <p className="page-text">
            <a
              href="https://www.canva.com/ru_ru/grafiki/"
              className="page-link"
            >
              Canva
            </a>{" "}
            — онлайн-сервис по созданию диаграмм и графиков самостоятельно или
            на основе готовых шаблонов.
          </p>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default LinksPage;
