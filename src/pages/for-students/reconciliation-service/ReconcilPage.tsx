import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Name from "../../../components/Name";
import Navbar from "../../../components/Navbar";

function ReconcilPage() {
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
          <Link to="/for-students" className="a-path">
            Обучающимся
          </Link>
          <a className="path-dot">&middot;</a>
          <Link 
            to="/for-students/reconciliation-service"
            className="a-path-last"
          >
            Школьная служба примирения
          </Link>
        </div>

        <div className="page-content">
          <p className="page-title">Школьная служба примирения</p>
          <br />
          <br />
          <p className="page-text bold">3 секрета бесконфликтного общения</p>
          <iframe
            className="youtube"
            src="https://www.youtube.com/embed/eVSih-LzKpk?si=OM639IffN1Y-bZL7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <br />
          <p className="category-title"></p>
          <p className="page-text">
            В МАОУ «СОШ № 6» работает Школьная служба примирения - это
            объединение обучающихся и педагогов, которое:
          </p>
          <ol>
            <li>Действует на основе добровольческих усилий;</li>
            <li>Реализует восстановительный подход к разрешению конфликтов;</li>
            <li>
              Проводит профилактику деструктивного поведения и правонарушений
              детей и подростков;
            </li>
            <li>
              Способствует построению конструктивных отношений в школьном
              сообществе.
            </li>
          </ol>
          <br />
          <p className="page-text">
            В случае возникновения неразрешимой конфликтной ситуации Вы можете
            обратиться за помощью в кабинет №52 к педагогам- психологам школы
            Голинской Виктории Викторовне и Довгань Наталье Павловне.
          </p>
          <br />
          <table>
            <tr>
              <th>Название документа</th>
              <th>Ссылка на скачивание</th>
            </tr>
            <tr>
              <td>Положение Школьной Службы Примирения МАОУ СОШ № 6</td>
              <td>
                <a
                  className="page-link"
                  href="https://sevschool6.ru/data/12f556b5c59b854141e3875b6a1aa11a.docx"
                >
                  Скачать
                </a>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <p className="page-text bold">
            Школьная Служба примирения. Соцреклама
          </p>
          <iframe
            className="youtube"
            src="https://www.youtube.com/embed/BjCadJjgEfA?si=9jkuk0UPsybXDBxk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ReconcilPage;
