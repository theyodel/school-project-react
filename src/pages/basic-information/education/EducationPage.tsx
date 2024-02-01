import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

function EducationPage() {
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
          <a href="/basic-information/education" className="a-path-last">
            Образование
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">Образование</h1>
          <br />
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EducationPage;
