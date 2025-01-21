import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Icon } from "@iconify/react";

export default function Menu() {
  return (
    <Navbar expand="lg" className="container-nav">
      <Container fluid>
        <Navbar.Brand href="/">
          <Icon className="ico-nav" icon="logos:web-dev" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <a href="#banner">Home</a>
            <a href="#features">Features</a>
            <a href="#testemunho">Clientes</a>
            <a href="#planos">Planos e Preços</a>
            <a href="#footer">Contato</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
