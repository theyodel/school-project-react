import Footer from "../../../components/Footer";
import Name from "../../../components/Name";
import Navbar from "../../../components/Navbar";

function VacanciesPage() {
  return (
    <>
      <title>Вакантные Места для Приёма (Перевода)</title>

      <Navbar />
      <main>
        <Name />

        <div className="div-path">
          <a href="/" className="a-path">
            Главная
          </a>
          <a className="path-dot">&middot;</a>
          <a href="/basic-information" className="a-path">
            Сведения об ОО
          </a>
          <a className="path-dot">&middot;</a>
          <a href="/basic-information/support-measures" className="a-path-last">
            Вакантные места для приема (перевода)
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">Вакантные места для приема (перевода)</h1>
          <br />
          <br />
          <p className="page-text">
            Информация о количестве вакантных мест для приема (перевода)
            обучающихся по каждой реализуемой образовательной программе, по
            имеющимся в МАОУ «СОШ № 6» бюджетным или иным видам ассигнований
            (2023-2024 учебный год){" "}
            <a
              href="https://sevschool6.ru/data/8003b5c4eb13ace79243134ae2e806ff.pdf"
              className="page-link"
            >
              Смотреть
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default VacanciesPage;
