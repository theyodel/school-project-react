import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import Footer from "../../components/Footer";
import logo from "/public/logo.svg";
import { Link } from "react-router-dom";

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
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <a href="https://foodmonitoring.ru/22393/food">Food</a>
                </li>
                <li>
                  <Link to="/site-map">Карта Сайта</Link>
                </li>
                <li>
                  <Link to="/feedback" className="active">
                    Обращения Граждан
                  </Link>
                </li>
                <li>
                  <Link to="/feedback/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/school-food">Школьное Питание</Link>
                </li>
                <li>
                  <Link to="/helpful-links">Полезные Ссылки</Link>
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
          <h1 className="page-title">Обращения Граждан</h1>
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
                    <div className="col-25">
                      <Form.Label>Имя*</Form.Label>
                    </div>
                    <div className="col-75">
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                      />
                    </div>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <div className="col-25">
                      <Form.Label>Фамилия*</Form.Label>
                    </div>
                    <div className="col-75">
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                      />
                    </div>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <div className="col-25">
                      <Form.Label>Отчество</Form.Label>
                    </div>
                    <div className="col-75">
                      <Form.Control
                        type="text"
                        name="fName"
                        value={values.fName}
                        onChange={handleChange}
                        isValid={touched.fName && !errors.fName}
                      />
                    </div>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername2"
                  >
                    <div className="col-25">
                      <Form.Label>Электронная Почта*</Form.Label>
                    </div>

                    <InputGroup hasValidation>
                      <div className="col-75">
                        <Form.Control
                          type="text"
                          placeholder="example@email.com"
                          aria-describedby="inputGroupPrepend"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                      </div>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <div className="col-25">
                      <Form.Label>Номер Телефона*</Form.Label>
                    </div>
                    <div className="col-75">
                      <Form.Control
                        type="text"
                        placeholder="+7 (000) 000-00-00"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                      />
                    </div>
                  </Form.Group>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Текст Обращения*</Form.Label>
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
                    id="file"
                  />
                </Form.Group>
                <Form.Group className="position-relative mb-3">
                  <Form.Check
                    required
                    name="terms"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    id="validationFormik106"
                    feedbackTooltip
                  />
                  <p>⠀Согласен(на) на обработку персональных данных*</p>
                </Form.Group>
                <p>
                  <p className="end-need">*</p>- Обязательное поле
                </p>
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
