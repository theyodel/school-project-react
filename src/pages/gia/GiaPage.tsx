import Footer from "../../components/Footer";
import Name from "../../components/Name";
import Navbar from "../../components/Navbar";

function GiaPage() {
  
    return(
        <>
          <Navbar />

          <main>
            <Name />

            <div className="div-path">
              <a href="/" className="a-path">
                Главная
              </a>
              <a className="path-dot">&middot;</a>
              <a href="/gia" className="a-path-last">
                ГИА
              </a>
            </div>

            <div className="page-content">
              <p className="page-title">Государственная Итоговая Аттестация</p>
              <br />
              <br />
              <a href="https://www.consultant.ru/document/cons_doc_LAW_140174/95d9ecc180e13e58ff632723375f109b36986b8c/" className="page-link">Федеральный закон от 29.12.2012 N 273-ФЗ (ред. от 30.12.2021) "Об образовании в Российской Федерации" (с изм. и доп., вступ. в силу с 01.01.2022)</a>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
          </main>
        </>
    );
}

export default GiaPage;