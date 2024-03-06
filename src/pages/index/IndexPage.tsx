import Footer from "../../components/Footer";
import Name from "../../components/Name";
import logo from "/logo.png";
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <>
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
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-teal">Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <div className="user">
                  <img
                    src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="user"
                  />
                  <div className="user-info">
                    <h5>July Dec</h5>
                    <small>5 марта 2024, 14:35</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-teal">Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <div className="user">
                  <img
                    src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="user"
                  />
                  <div className="user-info">
                    <h5>July Dec</h5>
                    <small>5 марта 2024, 14:35</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-teal">Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <div className="user">
                  <img
                    src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="user"
                  />
                  <div className="user-info">
                    <h5>July Dec</h5>
                    <small>5 марта 2024, 14:35</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-teal">Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>An exploration into the truck's polarising design</p>
                <div className="user">
                  <img
                    src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="user"
                  />
                  <div className="user-info">
                    <h5>July Dec</h5>
                    <small>5 марта 2024, 14:35</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img
                  src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                  alt="rover"
                />
              </div>
              <div className="card-body">
                <span className="tag tag-teal">Technology</span>
                <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                <p>
                  An exploration into the truck's polarising design{" "}
                  <a href="#">Read More...</a>
                </p>
                <div className="user">
                  <img
                    src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="user"
                  />
                  <div className="user-info">
                    <h5>July Dec</h5>
                    <small>5 марта 2024, 14:35</small>
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
        </div>

        <Footer />
      </main>
    </>
  );
}

export default IndexPage;
