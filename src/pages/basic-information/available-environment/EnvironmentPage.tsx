import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

function EnvironmentPage() {
  return (
    <>
      <Navbar />
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
          <a href="/basic-information" className="a-path">
            Сведения об ОО
          </a>
          <a className="path-dot">&middot;</a>
          <a
            href="/basic-information/available-environment"
            className="a-path-last"
          >
            Доступная среда
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">Доступная Среда</h1>
          <br />
          <br />
          <p className="page-text">
            В МАОУ “СОШ № 6” обучаются дети-инвалиды – 13 человек, из них дети
            инвалиды (ММГ) – 1. Все дети обучаются по общеобразовательным
            программам. Адаптированная образовательная программа школой не
            реализуется.
            <br />
            <br />
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EnvironmentPage;
