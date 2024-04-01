import Footer from "../../components/Footer";
import Name from "../../components/Name";
import logo from "/logo.png";
import vklogo from "/vklogo.svg";
import sitelogo from "/sitelogo.png";
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <>
      <title>МАОУ «СОШ №6»</title>

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
                  <Link to="/" className="active">
                    Главная
                  </Link>
                </li>
                <li>
                  <a href="https://foodmonitoring.ru/22393/food">Food</a>
                </li>
                <li>
                  <Link to="/site-map">Карта Сайта</Link>
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
        <Name />

        <div className="div-path">
          <Link to="/" className="a-path a-path-last">
            Главная
          </Link>
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
          <p className="category-title">
            Новости и События
            <hr />
          </p>
          <div className="cardcontainer">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://sun9-4.userapi.com/impg/fb7N04T6UruOXSLXjlCeUMv8eeWmdJB0UFUAFg/cJX2x4AnbrA.jpg?size=807x605&quality=95&sign=8581a32c473eb518a813df81160d9e4e&c_uniq_tag=V-WwbLpVlllu2wpPT3fJRcL78Q-Ms9tSvpGRXAlK-go&type=albu"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <h4>Всемирный день театра</h4>
                <p>
                  Поздравляем школьный кукольный театр "Мозаика" (руководитель -
                  педагог - библиотекарь Дунаева Е.А.). Спасибо за ваше
                  творчество и радость, которую вы дарите маленьким зрителям!
                </p>
                <div className="user">
                  <div className="user-info">
                    <small>27 марта 2024</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img
                  src="https://sun9-57.userapi.com/impg/WSB_FNGHSpq3-T7rdj0F29bmeGCLA_Irtx9Vig/-g12-5xz4qk.jpg?size=807x807&quality=95&sign=347e8aa513fdd3621112b5f23107ef52&c_uniq_tag=Q2Xi3Ak5QTlBDDx908osxRmltKlfgIEyQbEakAcUXDo&type=album"
                  alt="news"
                />
              </div>
              <div className="card-body">
                <h4>5 причин оформить Пушкинскую карту</h4>
                <p>
                  ✅ Это бесплатно <br />✅ Больше впечатлений <br />✅
                  Причастность к большему <br /> ✅ Возможности <br /> ✅ Друзья
                </p>
                <div className="user">
                  <div className="user-info">
                    <small>27 марта 2024</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img
                  src="https://sun64-2.userapi.com/impg/fG_BVoQrf1u_2HkFqA0xjH2xP1TSr1oONWJsQw/K0rpQxFx6EM.jpg?size=807x539&quality=95&sign=ded4a2d4ef0a5a49634fd1ce826a79d1&c_uniq_tag=61oh84IyPonmDpUxHkJQd5TydEttNBsT5QGk0quEMWs&type=album"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <h4>Внимание!!!</h4>
                <p>Родителям будущих первоклассников!</p>
                <div className="user">
                  <div className="user-info">
                    <small>26 марта 2024</small>
                  </div>
                </div>
              </div>
            </div>
            <Link className="linkcard" to="/site-map">
              <div className="card">
                <div className="card-header">
                  <img
                    src="https://sun9-36.userapi.com/impg/l9s9tVmh426naqRcx6zefrK5WSMFQirDFEcXTg/27CuAmjccR8.jpg?size=807x538&quality=95&sign=71d6166cd6c7274ec7fb1b1d42386e83&c_uniq_tag=RZe4gWEwmPplXmNgl-EoftNh6Y5r-kGCDo1CczJ0yck&type=album"
                    alt="rover"
                  />
                </div>
                <div className="card-body">
                  <h4>Внимание, ГТО!</h4>
                  <p>
                    Появилась информация по ЗНАЧКАМ ГТО, которые до сих пор не
                    вручены!!! Просьба, внимательно ознакомиться!
                    <br />
                    <br />
                    <br />
                    <br />
                    ШСК "Авангард"
                  </p>
                  <div className="user">
                    <div className="user-info">
                      <small>26 марта 2024</small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="card">
              <div className="card-header">
                <img
                  src="https://sun64-2.userapi.com/impg/cLgGm3d4kcz9VKHAsR6UsGG3MuTOAhAM5uhqhA/z83YNn6IRK8.jpg?size=2560x1920&quality=95&sign=24719570195738178c59d4083029397f&type=album"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <h4>
                  Увлекательная поездка в столицу России - красавицу Москву!
                </h4>
                <p>
                  В дни весенних каникул ученики 8А, 8Б и 6 А классов вместе со
                  своими классными руководителями Денисовой С.И, Комольцевой
                  И.В., Зиновьевой Н.В. отправились в столицу России.
                </p>
                <div className="user">
                  <div className="user-info">
                    <small>26 марта 2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="https://vk.com/sevskschool6" className="btncenter">
            <button className="bn632-hover bn26">Больше новостей</button>
          </a>
          <br />

          <br />
          <br />

          <p className="category-title">Мы в Соц. Сетях</p>
          <hr />
          <br />
          <br />
          <div className="sociallinks">
            <a href="https://vk.com/sevskschool6">
              <img
                src={vklogo}
                alt="VK Logo"
                title="Группа ВКонтакте"
                className="vklogo"
              />
            </a>
            <Link to="/">
              <img
                src={sitelogo}
                alt="Наш Сайт"
                title="Наш Сайт"
                className="vklogo"
              />
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
