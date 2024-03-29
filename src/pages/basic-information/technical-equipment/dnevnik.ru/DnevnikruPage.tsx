import Footer from "../../../../components/Footer";
import Name from "../../../../components/Name";
import Navbar from "../../../../components/Navbar";
import { Link } from "react-router-dom";

function DnevnikruPage() {
  return (
    <>
      <title>Dnevnik.ru</title>

      <Navbar />
      <main>
        <Name />

        <div className="div-path">
          <Link to="/" className="a-path">
            Главная
          </Link>
          <a className="path-dot">&middot;</a>
          <Link to="/basic-information" className="a-path">
            Сведения об ОО
          </Link>
          <a className="path-dot">&middot;</a>
          <Link
            to="/basic-information/technical-equipment/dnevnik.ru"
            className="a-path-last"
          >
            Электронный дневник
          </Link>
        </div>

        <div className="page-content">
          <h1 className="page-title">Электронный дневник</h1>
          <br />
          <br />
          <p className="page-text">
            В соответствии с письмом Министерства связи и массовых коммуникаций
            Российской Федерации от 26.04.2017 №АК-П13-062-9744 Министерство
            связи и информационных технологий и Министерство образования и науки
            Архангельской области уведомляют о переходе с 01.10.2017 г. на
            авторизацию пользователей в Дневник.ру исключительно через Единую
            систему идентификации и аутентификации (далее – ЕСИА). Войти в
            Дневник.ру можно будет со страницы:{" "}
            <a href="https://29.dnevnik.ru" className="page-link">
              https://29.dnevnik.ru
            </a>
            . Рекомендуем заранее зарегистрироваться на{" "}
            <a
              href="https://esia.gosuslugi.ru/registration/"
              className="page-link"
            >
              портале госуслуг
            </a>{" "}
            и попробовать войти в Дневник.ру через ЕСИА.
            <br />
            <br />
            Новые пользователи и пользователи, у которых еще не активирована
            учетная запись Дневник.ру, могут её активировать по временному
            логину и паролю в любое время на странице:{" "}
            <a href="https://login.dnevnik.ru" className="page-link">
              https://login.dnevnik.ru
            </a>
            <br />
            <br />
            В случае возникновения ошибки при авторизации необходимо обратиться
            к сотруднику образовательной организации, который является
            администратором в Дневник.ру, для исправления ФИО / номера СНИЛС /
            даты рождения или получения регистрационных данных.
            <br />
            <br />
            Описание необходимых действий для успешной авторизации в Дневник.ру
            с использованием логина и пароля от личного кабинета на Едином
            портале государственных и муниципальных услуг (функций):
          </p>
          <ul>
            <li>
              <a
                href="https://two-schoolsev.ucoz.ru/new/2017-2018/do_14_let.pdf"
                className="page-link"
              >
                Для пользователей младше 14 лет
              </a>
            </li>
            <li>
              <a
                href="https://two-schoolsev.ucoz.ru/new/2017-2018/posle_14_let.pdf"
                className="page-link"
              >
                Для пользователей старше 14 лет
              </a>
            </li>
            <li>
              <a
                href="https://two-schoolsev.ucoz.ru/new/2017-2018/usloviya.pdf"
                className="page-link"
              >
                Условия для авторизации через госуслуги
              </a>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DnevnikruPage;
