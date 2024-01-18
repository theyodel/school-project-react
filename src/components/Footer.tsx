function Footer() {
  return (
    <>
      <footer className="ffooter">
        <div className="footer-container">
          <div className="footer-row">
            <div className="ffooter-col-1">
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
              </ul>
            </div>
            <div className="ffooter-col-1">
              <ul>
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
        <hr className="hr-footer" />
        <p className="footer-copyright">
          <h5>© Заварзин А.В., 2023-2024</h5>
        </p>
      </footer>
    </>
  );
}

export default Footer;
