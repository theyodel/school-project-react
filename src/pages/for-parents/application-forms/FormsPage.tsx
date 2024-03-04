import Footer from "../../../components/Footer";
import Name from "../../../components/Name";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";

function FormsPage() {
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
          <Link to="/for-parents" className="a-path">
            Родителям
          </Link>
          <a className="path-dot">&middot;</a>
          <Link to="/for-parents/application-forms" className="a-path-last">
            Бланки заявлений
          </Link>
        </div>

        <div className="page-content">
          <p className="page-title">Бланки заявлений</p>
          <br />
          <br />
          <table>
            <tr>
              <th>Название документа</th>
              <th>Ссылка на скачивание</th>
            </tr>
            <tr>
              <td>
                Бланк заявления об освобождении обучающегося от учебных занятий
              </td>
              <td>
                <a href="" className="page-link">
                  Скачать
                </a>
              </td>
            </tr>
            <tr>
              <td>Бланк заявления о приеме в МАОУ "СОШ № 6"</td>
              <td>
                <a href="" className="page-link">
                  Скачать
                </a>
              </td>
            </tr>
          </table>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default FormsPage;
