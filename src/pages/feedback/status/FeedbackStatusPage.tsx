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

        <div className="wrapper">
          <div className="container">
            <div className="container_item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                aliquid inventore cum voluptatum, porro dolores deserunt
                adipisci praesentium blanditiis eligendi fugiat, dolor, quidem
                harum quo necessitatibus doloribus officiis iure rem unde
                quibusdam atque esse nobis rerum voluptatibus. Tenetur tempore
                quod laboriosam quidem esse eos labore optio voluptatum,
                consequuntur est voluptate autem, mollitia facilis ex eaque?
              </p>
            </div>
            <div className="container_line line">
              <div className="line_item line_top"></div>
              <div className="line_center"></div>
              <div className="line_item line_bottom"></div>
            </div>
            <div className="container_item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit eligendi, magni debitis doloremque provident quibusdam!
              </p>
            </div>
          </div>
          <div className="container">
            <div className="container_item">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                ea labore eum illo numquam impedit voluptatem laudantium sequi
                beatae odio excepturi natus voluptatibus sit ratione sunt porro
                deleniti, fugit suscipit!
              </p>
            </div>
            <div className="container_line line">
              <div className="line_item line_top"></div>
              <div className="line_center"></div>
              <div className="line_item line_bottom"></div>
            </div>
            <div className="container_item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                maiores dignissimos atque dolorum cumque, optio architecto vel
                maxime id. Cupiditate modi deleniti suscipit quas adipisci
                nostrum eos recusandae aperiam quo iure asperiores in ab quia
                eius inventore voluptatibus dolor saepe dolorum numquam nemo,
                facere veniam impedit consequuntur quam? Ex, minima!
              </p>
            </div>
          </div>
          <div className="container">
            <div className="container_item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                nesciunt voluptatem aut similique asperiores sint ea fugit et
                eligendi accusantium!
              </p>
            </div>
            <div className="container_line line">
              <div className="line_item line_top"></div>
              <div className="line_center"></div>
              <div className="line_item line_bottom"></div>
            </div>
            <div className="container_item">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                iure commodi aut recusandae totam?
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default FeedbackStatusPage;
