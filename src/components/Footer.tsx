import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="ffooter">
        <div className="footer-container">
          <div className="footer-row">
            <div className="ffooter-col-1">
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://foodmonitoring.ru/22393/food"
                  >
                    Food
                  </a>
                </li>
                <li>
                  <Link to="/site-map">Карта Сайта</Link>
                </li>
                <li>
                  <Link to="/feedback">Обращения Граждан</Link>
                </li>
              </ul>
            </div>
            <div className="ffooter-col-1">
              <ul>
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
            </div>
            <div className="ffooter-col-2">
              <ul>
                <li>
                  <a href="https://yandex.ru/maps/-/CDqdRF9a" target="_blank">
                    Адрес: 164500, г. Северодвинск, Архангельская обл., ул.
                    Ломоносова, 83
                  </a>
                </li>
                <li>
                  <a href="tel:8 (8184) 53-44-04">Телефон: 8 (8184) 53-44-04</a>
                </li>
                <li>
                  <a href="mailto:school6severodvinsk@bk.ru">
                    E-mail: school6severodvinsk@bk.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
