import Carousel from "react-bootstrap/Carousel";

export default function Testemunho() {
  return (
    <section id="testemunho" className="testemunho">
      <div className="container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item className="box">
            <img
              className="testemunho-img"
              src="/image/cliente.jpg"
              alt="Third slide"
            />
            <i>João j. Lucas</i>
            <h2>
              Excelente ferramenta para acompanhamento do dia a dia, sendo
              fléxivel o suficiente para a maior parte dos usos. Seja para
              controle de CRM ou para controle de visitas, o web.dev tem se
              relevado uma ferramenta muito útil e intuitiva.
            </h2>
            <br />
            <br />
          </Carousel.Item>

          <Carousel.Item className="box">
            <img
              className="testemunho-img"
              src="/image/cliente.jpg"
              alt="Third slide"
            />
            <i>Pedro Henrique</i>
            <h2>
              Excelente ferramenta para acompanhamento do dia a dia, sendo
              fléxivel o suficiente para a maior parte dos usos. Seja para
              controle de CRM ou para controle de visitas, o web.dev tem se
              relevado uma ferramenta muito útil e intuitiva.
            </h2>
            <br />
            <br />
          </Carousel.Item>

          <Carousel.Item className="box">
            <img
              className="testemunho-img"
              src="/image/cliente.jpg"
              alt="Third slide"
            />
            <i>Fabio Rodrigo</i>
            <h2>
              Excelente ferramenta para acompanhamento do dia a dia, sendo
              fléxivel o suficiente para a maior parte dos usos. Seja para
              controle de CRM ou para controle de visitas, o web.dev tem se
              relevado uma ferramenta muito útil e intuitiva.
            </h2>
            <br />
            <br />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
