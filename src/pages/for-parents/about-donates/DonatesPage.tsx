import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Name from "../../../components/Name";
import Navbar from "../../../components/Navbar";

function DonatesPage() {
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
          <Link to="/for-parents/about-donates" className="a-path-last">
            О добровольном труде и пожертвованиях
          </Link>
        </div>

        <div className="page-content">
          <p className="page-title">О добровольном труде и пожертвованиях</p>
          <br />
          <br />
          <table>
            <tr>
              <th>Название документа</th>
              <th>Ссылка на скачивание</th>
            </tr>
            <tr>
              <td>
                Федеральный закон от 11.08.1995 года №135-ФЗ "О
                благотворительной деятельности и благотворительных организациях"
              </td>
              <td>
                <a href="" className="page-link">
                  Скачать
                </a>
              </td>
            </tr>
            <tr>
              <td>
                Методические материалы по привлечению и организации добровольцев
                и добровольческих организаций государственными и муниципальными
                учреждениями
              </td>
              <td>
                <a href="" className="page-link">
                  Скачать
                </a>
              </td>
            </tr>
            <tr>
              <td>
                Положение о порядке формирования и использования целевых
                взносов, добровольных пожертвований юридических и физических лиц
                в МАОУ "СОШ № 6"
              </td>
              <td>
                <a href="" className="page-link">
                  Скачать
                </a>
              </td>
            </tr>
            <tr>
              <td>Договор благотворительного пожертвования</td>
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

export default DonatesPage;
