function NavBar() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="logo">
              <a href="/">logo</a>
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
                  <a href="/">Карта Сайта</a>
                </li>
                <li>
                  <a href="/">Обращения Граждан</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Школьное Питание</a>
                </li>
                <li>
                  <a href="/">Полезные Ссылки</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
