import Footer from "../../components/Footer";
import Name from "../../components/Name";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function OlympiadPage() {
  return (
    <>
      <Navbar />

      <main>
        <Name />

        <div className="div-path">
          <Link to="/" className="a-path">
            Главная
          </Link>
          <a className="path-dot">&middot;</a>
          <Link to="/site-map" className="a-path-last">
            Всероссийская Олимпиада Школьников
          </Link>
        </div>

        <div className="page-content">
          <p className="page-title">Всероссийская Олимпиада Школьников</p>
          <br />
          <br />
          <img
            src="/0a43a5edf1aaf29384669d6a6496069b.jpeg"
            alt="ВСОШ"
            className="page-img text-center"
          />
          <p className="page-text bold text-center">2023-2024 учебный год</p>
          <br />
          <p className="category-title">Школьный этап ВсОШ:</p>
          <p className="page-text">
            Портал “Образование Архангельской области”{" "}
            <a
              href="https://www.arkh-edu.ru/olympics/vo/"
              className="page-link"
            >
              смотреть
            </a>
            <br />
            <br />
            Сроки проведения школьного этапа ВсОШ в Архангельской области в
            2023-2024 учебном году{" "}
            <a
              href="https://sevschool6.ru/data/5802112ce72396293d19afe40a8e0083.pdf"
              className="page-link"
            >
              смотреть
            </a>
            <br />
            <br />
            Приказ МАОУ “СОШ № 6” от 31.08.2023 № 1.11.-191 “Об организации
            школьного этапа всероссийской олимпиады школьников в 2023-2024
            учебном году”{" "}
            <a
              href="https://sevschool6.ru/data/ef153153e79f7ec906908ec494839b56.pdf"
              className="page-link"
            >
              смотреть
            </a>
          </p>
          <br />
          <p />
          <p>
            <a className="page-link" href="">
              Итоги школьного этапа ВсОШ 2023-2024 учебного года по предметам:
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default OlympiadPage;
