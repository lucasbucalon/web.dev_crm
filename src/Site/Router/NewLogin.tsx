import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { Icon } from "@iconify/react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/firebase";

import "./login.css";

export default function NewLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const setUser = useNavigate();

  function newUserLogin() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((CreateUser) => {
        const user = CreateUser.user;
        console.log(user);
        setUser("/app");
      })
      .catch((error) => {
        setMensagem(error.message);
      });
  }

  return (
    <div className="back">
      <div className="container">
        <Form className="form-login">
          <a href="/">
            <Icon className="ico-dev" icon="logos:web-dev" />
          </a>

          <h1>Criar conta</h1>
          <br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              className="form-email"
              type="email"
              placeholder="E-mail"
            />
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              className="form-pass"
              type="password"
              placeholder="Senha"
            />
          </Form.Group>

          <Button
            onClick={newUserLogin}
            className="form-button"
            variant="primary"
            type="button"
          >
            Criar conta
          </Button>

          {mensagem.length > 0 ? (
            <Alert className="alert-newLogin">{mensagem}</Alert>
          ) : null}

          <div className="form-link">
            <Link to="/app">Já tenho uma conta</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
