import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function StaffPage() {
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
          <a href="/basic-information/staff" className="a-path-last">
            Руководство. Педагогический состав
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">Руководство. Педагогический состав</h1>
          <br />
          <br />

          <table>
            <tr>
              <th>ФИО</th>
              <th>Информация</th>
            </tr>
            <tr>
              <td>
                Лютянская Галина Анатольевна <br />
                <br />
                Контактный телефон -{" "}
                <a href="tel:8(8184)534404">8(8184)534404</a>
                <br />
                Адрес электронной почты -{" "}
                <a href="mailto:school6severodvinsk@bk.ru">
                  school6severodvinsk@bk.ru
                </a>
              </td>
              <td>
                директор школы, учитель математики высшей категории,
                образование: ПГУ им. М.В. Ломоносова по специальности
                "Математика", квалификация “Учитель математики”. Диплом о
                профессиональной переподготовке, НОУ ВПО "Институт управления",
                2015 г. Курсы повышения квалификации “Управленческие решения:
                виды, варианты принятия, оценка эффективности”, 2021г.,
                “Проектирование локальных актов в образовательной организации”,
                2021г., “Деятельность образовательной организации по созданию
                безопасной образовательной среды”, 2021г., “Введение обновленных
                ФГОС ОО: управленческий аспект”, 2023г. Ученой степени, ученого
                звания – не имеет. Общий стаж работы – 47 лет, педагогический
                стаж – 47 лет, стаж работы в должности – 23 года.
              </td>
            </tr>
            <tr>
              <td>
                Стешенко Елена Юрьевна <br />
                <br />
                Контактный телефон -{" "}
                <a href="tel:8(8184)556212">8(8184)556212</a>
                <br />
                Адрес электронной почты -{" "}
                <a href="mailto:e1l1e1n1a1@mail.ru">e1l1e1n1a1@mail.ru</a>
              </td>
              <td>
                заместитель директора по УВР, учитель русского языка и
                литературы высшей категории, образование: ПГУ им. М.В.
                Ломоносова по специальности "Русский язык и литература",
                квалификация “Учитель русского языка и литературы”. Курсы
                повышения квалификации “Вопросы стандаризации в образовании
                детей с ОВЗ”, 2021 г., “Введение обновленного ФГОС ООО:
                образовательный интенсив для управленцев”, 2022 г., “Введение
                обновленных ФГОС ОО: управленческий аспект”, 2023г. Ученой
                степени, ученого звания – не имеет. Общий стаж работы – 27 лет,
                педагогический стаж -27 лет, стаж работы в должности –17 лет.
              </td>
            </tr>
            <tr>
              <td>
                Слотина Ольга Дмитриевна <br />
                <br />
                Контактный телефон -{" "}
                <a href="tel:8(8184)534404">8(8184)534404</a>
                <br />
                Адрес электронной почты -{" "}
                <a href="mailto:slonik20151@yandex.ru">slonik20151@yandex.ru</a>
              </td>
              <td>
                заместитель директора по УВР, образование: ГОУ ПГУ им. М.В.
                Ломоносова по специальности "Социальная работа", квалификация
                “Специалист по социальной работе”, 2002 г., ГОУ ВПО "МГУТУ" по
                специальности "Антикризисное управление", квалификация
                “Экономист-менеджер”. Курсы повышения квалификации “Перевод школ
                в эффективный режим функционирования: управленческий аспект”,
                2021 г., “Введение обновленных ФГОС ОО: управленческий аспект”,
                2023г. Ученой степени, ученого звания – не имеет. Общий стаж
                работы – 32 года, педагогический стаж – 32 года, стаж работы в
                должности –11 лет.
              </td>
            </tr>
            <tr>
              <td>
                Белая Ольга Сергеевна <br />
                <br />
                Контактный телефон -{" "}
                <a href="tel:8(8184)530258">8(8184)530258</a>
                <br />
                Адрес электронной почты -{" "}
                <a href="mailto:olga.belaya.74@bk.ru">olga.belaya.74@bk.ru</a>
              </td>
              <td>
                заместитель директора по ВР, образование: ПГУ им. М.В.
                Ломоносова по специальности "Педагогика и методика начального
                образования", квалификация “Учитель начальных классов, учитель
                музыки в начальной школе”, МГИУ по специальности “Менеджмент”,
                квалификация “Менеджер”. Курсы повышения квалификации
                “Проектирование программы летнего отдыха и оздоровления детей”,
                2021г., “Профилактика профессионального выгорания”, 2021 г.,
                “Организация воспитательной работы в условиях ФГОС ОО: принципы,
                методы, технологии”, 2020 г., “Введение обновленных ФГОС ОО:
                управленческий аспект”, 2023г. Ученой степени, ученого звания –
                не имеет. Общий стаж работы – 25 года, педагогический стаж – 11
                лет, стаж работы в должности – 3 года.
              </td>
            </tr>
            <tr>
              <td>
                Пантелеева Людмила Васильевна <br />
                <br />
                Контактный телефон -{" "}
                <a href="tel:8(8184)556212">8(8184)556212</a>
                <br />
                Адрес электронной почты -{" "}
                <a href="mailto:samillud76@mail.ru">samillud76@mail.ru</a>
              </td>
              <td>
                заместитель директора по УВР, учитель информатики высшей
                категории, образование: Северодвинский филиал
                Санкт-Петербургского государственного Морского технического
                университета по специальности "Математика", квалификация
                “Математик, преподаватель математики и информатики”. Курсы
                повышения квалификации “Технология проведения экспертизы в
                системе образования: образовательная деятельность, программы,
                проекты”, 2021 г., “Модель управления развитием школы в
                контексте цифровой трансформации”, 2020 г., “Введение
                обновленных ФГОС ОО: управленческий аспект”, 2023г. Ученой
                степени, ученого звания – не имеет. Общий стаж работы – 23 года,
                педагогический стаж – 23 года, стаж работы в должности – 6 лет.
              </td>
            </tr>
            <tr>
              <td>
                Перепелкин Михаил Александрович <br />
                <br />
                Контактный телефон <a href="tel:8(8184)534404">8(8184)534404</a>
                <br />
                Адрес электронной почты -{" "}
                <a href="mailto:perepelkin_mixail_72@bk.ru">
                  perepelkin_mixail_72@bk.ru
                </a>
              </td>
              <td>
                заместитель директора по административно-хозяйственной работе,
                образование: Академия Государственной противопожарной службы МЧС
                России, квалификация “Инженер”, специальность “Пожарная
                безопасность”, 2004 г. Профессиональная переподготовка АНО ДПО
                “Академия ГлавСпец” по образовательной программе
                “Государственное и муниципальное управление”, квалификация
                “Специалист по государственному и муниципальному управлению”,
                2019 г. Курсы повышения квалификации “Пожарно-технический
                минимум для руководителей и ответственных за пожарную
                безопасность образовательных учреждений”, 2021 г.,
                “Антитеррористическая защищенность образовательной организации”,
                2020 г. Ученой степени, ученого звания – не имеет. Общий стаж
                работы – 34 года, стаж работы в должности – 5 лет.
              </td>
            </tr>
            <tr>
              <td>
                Шапкина Любовь Валерьевна
                <br />
                <br />
                Контактный телефон <a href="tel:8(8184)530045">8(8184)530045</a>
                <br />
                Адрес электронной почты –{" "}
                <a href="mailto:buh.6sev@yandex.ru">buh.6sev@yandex.ru</a>
              </td>
              <td>
                главный бухгалтер , образование: ЧОУ ВО “Институт управления”,
                квалификация "Экономист", специальность «Бухгалтерский учет,
                анализ и аудит», 2016 год. Диплом ООО “Институт Эксперт” о
                профессиональной переподготовке по программе “Управление
                закупками для обеспечения государственных, муниципальных и
                корпоративных нужд”, квалификация “Специалист в сфере закупок”,
                2019 г., курсы повышения квалификации “Составление и
                представление бухгалтерской (финансовой) отчетности
                экономического субъекта”, 2021 г. Ученой степени, ученого звания
                – не имеет. Общий стаж работы – 16 лет, стаж работы в должности
                – 11 лет.
              </td>
            </tr>
          </table>
          <br />
          <p className="page-text">
            Руководитель представительств и филиалов: не имеет.
            <br />
            Должность руководителя представительств и филиалов: не имеет.
            <br />
            Телефон руководителя предствительств и филиалов: не имеет.
            <br />
            Адрес электронной почты руководителя предствительств и филиалов: не
            имеет.
          </p>
          <br />
          <p className="page-text">
            <a
              className="page-link"
              href="https://sevschool6.ru/data/551f0c94ad7ab465c3e64e2e9b79dfa5.xls"
            >
              Администрация МАОУ "СОШ № 6"
            </a>
            <br />
            <br />
            <a
              className="page-link"
              href="https://sevschool6.ru/data/eefb74236c2e4c815b9ee73c99d4e7fd.pdf"
            >
              Персональный состав педагогических работников МАОУ "СОШ № 6"
            </a>
            <br />
            <br />
            <a
              className="page-link"
              href="https://sevschool6.ru/data/3c4a1e591cd0c2218118802f7b862ed6.pdf"
            >
              Персональный состав педагогических работников реализуемой основной
              образовательной программы начального общего образования МАОУ "СОШ
              № 6"
            </a>
            <br />
            <br />
            <a
              className="page-link"
              href="https://sevschool6.ru/data/5023884deb6cd103998b76a4bc4781bc.pdf"
            >
              Персональный состав педагогических работников реализуемой основной
              образовательной программы основного общего образования МАОУ "СОШ №
              6"
            </a>
            <br />
            <br />
            <a
              className="page-link"
              href="https://sevschool6.ru/data/a5a5475f3d6fb19fcef06c3d9fa90300.pdf"
            >
              Персональный состав педагогических работников реализуемой основной
              образовательной программы среднего общего образования МАОУ "СОШ №
              6"
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default StaffPage;
