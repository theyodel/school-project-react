import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import Footer from "../../components/Footer";

function FeedbackPage() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  return (
    <>
      <title>Обращения Граждан</title>

      <header className="header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="logo">
              <a href="/">
                <img src="/public/logo.png" alt="logo" />
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
                  <a href="/feedback" className="active">
                    Обращения Граждан
                  </a>
                </li>
                <li>
                  <a href="/feedback/faq">FAQ</a>
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
          <a href="/site-map" className="a-path-last">
            Обращения граждан
          </a>
        </div>

        <div className="page-content">
          <h1 className="page-title">Полезные Ссылки</h1>
          <br />
          <br />

          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              firstName: "",
              lastName: "",
              fName: "",
              email: "",
              phone: "",
              file: null,
              terms: false,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Имя*</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Фамилия*</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control
                      type="text"
                      name="fName"
                      value={values.fName}
                      onChange={handleChange}
                      isValid={touched.fName && !errors.fName}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Электронная Почта*</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="example@email.com"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Номер Телефона*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="+7 (000) 000-00-00"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      isInvalid={!!errors.phone}
                    />
                  </Form.Group>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Текст Обращения</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="position-relative mb-3">
                  <Form.Label>Прикрепить файл</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                    onChange={handleChange}
                    isInvalid={!!errors.file}
                  />
                </Form.Group>
                <Form.Group className="position-relative mb-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Согласен(на) на обработку персональных данных"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    id="validationFormik106"
                    feedbackTooltip
                  />
                </Form.Group>
                <p>* - Обязательное поле</p>
                <Button type="submit">Отправить</Button>
              </Form>
            )}
          </Formik>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default FeedbackPage;
