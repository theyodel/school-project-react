import Footer from "../../../components/Footer";
import Name from "../../../components/Name";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";

function EgePage() {
  return (
    <>
      <title>Единый Государственный Экзамен</title>

      <Navbar />

      <main>
        <Name />
        <div className="div-path">
          <Link to="/" className="a-path">
            Главная
          </Link>
          <a className="path-dot">&middot;</a>
          <Link to="/gia" className="a-path">
            ГИА
          </Link>
          <a className="path-dot">&middot;</a>
          <Link to="/gia/ege" className="a-path-last">
            ГИА-11 (ЕГЭ)
          </Link>
        </div>

        <div className="page-content">
          <p className="page-title">ГИА-11 (ЕГЭ)</p>
          <br />
          <br />
          <p className="category-title">Информационное сопровождение</p>
          <ul>
            <li>
              <a
                className="page-link"
                href="https://ege.edu22.info/?ysclid=lroz0g21a9103398935"
              >
                Официальный информационный портал ЕГЭ
              </a>
            </li>
            <li>
              <a href="https://fipi.ru/ege" className="page-link">
                Сайт ФИПИ (Федеральный институт педагогических измерений)
              </a>
            </li>
            <li>
              <a href="http://www.rustest.ru/" className="page-link">
                Сайт ФИПИ (Федеральный институт педагогических измерений)
              </a>
            </li>
            <li>
              <a href="http://www.rustest.ru/" className="page-link">
                Сайт ФЦТ (Федеральный центр тестирования)
              </a>
            </li>
            <li>
              <a
                href="http://www.arkh-edu.ru/documents/attestatsiya/"
                className="page-link"
              >
                Портал «Образование Архангельской области»
              </a>
            </li>
            <li>
              <a
                href="http://www.coko29.info/index.php?option=com_content&view=article&id=72&Itemid=71"
                className="page-link"
              >
                Сайт государственного автономного учреждения
              </a>
            </li>
            <li>
              <a
                href="http://www.coko29.info/index.php?option=com_content&view=article&id=72&Itemid=71"
                className="page-link"
              >
                Архангельской области «Центр оценки качества образования»
              </a>
            </li>
            <li>
              <a href="http://www.edu.severodvinsk.ru/" className="page-link">
                Управление образования Администрации Северодвинска{" "}
              </a>
            </li>
            <li>
              <a href="http://os.fipi.ru/home/1" className="page-link">
                Открытый банк заданий ЕГЭ -2024 г.
              </a>
            </li>
            <li>
              <a
                href="https://fipi.ru/ege/demoversii-specifikacii-kodifikatory"
                className="page-link"
              >
                Демоверсии, спецификации, кодификаторы ЕГЭ 2024 можно посмотреть
                здесь…
              </a>
            </li>
            <li>
              <a
                href="https://aocoko.ru/gia/gia-11/2-informacionnye-metodicheskie-materialy/"
                className="page-link"
              >
                Информационные материалы
              </a>
            </li>
          </ul>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default EgePage;
