import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

function FeedbackStatusPage() {
  return (
    <>
      <title>Статус Обращений</title>

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

        <Footer />
      </main>
    </>
  );
}

export default FeedbackStatusPage;
