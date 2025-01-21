import { Link, Outlet } from "react-router-dom";

import { Icon } from "@iconify/react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./cliente.css";

export default function Menuhome() {
  return (
    <div>
      <Navbar expand="lg" className="container-home">
        <Container fluid>
          <Navbar.Brand href="/">
            <Icon className="ico-nav" icon="logos:web-dev" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 nav-home"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/app/home">Home</Link>

              <Link to="/app/home/novocliente">Novo cliente</Link>

              <Link to="/">Sair</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
