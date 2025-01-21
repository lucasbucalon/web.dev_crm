import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Planos() {
  return (
    <section id="planos" className="planos">
      <div className="container">
        <div className="row planos-box">
          <Card className="card">
            <h1 className="planos-tag">FREE</h1>
            <Card.Body>
              <Card.Title>
                <h1>R$ 0,00</h1>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <br />
              <Button variant="primary">
                <h3>Começar agora</h3>
              </Button>
            </Card.Body>
          </Card>

          <Card className="card">
            <h1 className="planos-tag">PRO</h1>
            <Card.Body>
              <Card.Title>
                <h1>R$ 49,90 /mês</h1>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <br />
              <Button variant="primary">
                <h3>Começar agora</h3>
              </Button>
            </Card.Body>
          </Card>

          <Card className="card">
            <h1 className="planos-tag">PREMIUM</h1>
            <Card.Body>
              <Card.Title>
                <h1>R$ 99,90 /mês</h1>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <br />
              <Button variant="primary">
                <h3>Começar agora</h3>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
