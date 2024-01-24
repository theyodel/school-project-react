import Footer from "../../../components/Footer";
import logo from "/public/logo.svg";

function FaqPage() {
  return (
    <>
      <title>Часто Задаваемые Вопросы</title>

      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-row align-items-center justify-content-between">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
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
                  <a href="/site-map">Карта Сайта</a>
                </li>
                <li>
                  <a href="/feedback">Обращения Граждан</a>
                </li>
                <li>
                  <a href="/feedback/faq" className="active">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/school-food">Школьное Питание</a>
                </li>
                <li>
                  <a href="/helpful-links">Полезные Ссылки</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
          <a href="/feedback" className="a-path">
            Обращения граждан
          </a>
          <a className="path-dot">&middot;</a>
          <a href="/faq" className="a-path-last">
            {"Часто задаваемые вопросы (FAQ)"}
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">{"Часто задаваемые вопросы (FAQ)"}</h1>

          <br />
          <br />

          <p className="page-text">
            1. Обращения, направленные в форме электронного документа через
            официальный сайт, поступают на рассмотрение в [наименование органа]
            и рассматриваются работниками [наименование органа] уполномоченными
            на то лицами.
          </p>
          <br />
          <p className="page-text">
            2. Обращение, направленное через официальный сайт образовательной
            организации, подлежит обязательной регистрации и рассмотрению в
            соответствии с требованиями Федерального закона от 02.05.2006 г. №
            59-ФЗ «О порядке рассмотрения обращений граждан Российской
            Федерации».
            <p />
            <br />
            <p className="page-text">
              3. Обращение регистрируется в течение трёх рабочих дней и
              направляется на исполнение должностным лицам в соответствии с их
              компетенцией.
            </p>
            <br />
            <p className="page-text">
              4. Обращение рассматривается в течение 30 дней со дня регистрации.
            </p>
            <br />
            <p className="page-text">
              5. На обращение, содержащее вопросы, решение которых не входит в
              компетенцию образовательной организации, ответ по существу
              обращения не даётся, о чём гражданин уведомляется в ответе.
            </p>
            <br />
            <p className="page-text">
              6. Ответ заявителю обращения направляется по электронному адресу,
              указанному при заполнении формы обращения.
            </p>
            <br />
            <p className="page-text">
              7. При рассмотрении обращения не допускается разглашение сведений,
              содержащихся в обращении, а также сведений, касающихся частной
              жизни гражданина, без его согласия. Информация о персональных
              данных заявителей хранится и обрабатывается с соблюдением
              требований российского законодательства о персональных данных.
            </p>
            <br />
            <p className="page-text">
              8. Обращения, поступившие через официальный сайт, анализируются и
              обобщаются руководством образовательной организации. На наиболее
              часто задаваемые вопросы периодически публикуются ответы в рубрике
              «Часто задаваемые вопросы».
            </p>
            <br />
            <p className="page-text">
              9. Гражданин может отслеживать статус зарегистрированного
              обращения, используя сервис «
              <a href="/feedback/status" className="page-link">
                Проверить статус обращения
              </a>
              ».
            </p>
          </p>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default FaqPage;
