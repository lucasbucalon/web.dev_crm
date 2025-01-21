import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Config/firebase";

import "./login.css";

export default function ResetSenha() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  function resetLogin() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSucesso("Email enviado com sucesso.");
      })
      .catch((error) => {
        setErro("Erro ao enviar email: " + error.message);
      });
  }

  return (
    <div className="back">
      <div className="container">
        <Form className="reset-login">
          <a href="/">
            <Icon className="ico-dev" icon="logos:web-dev" />
          </a>
          <h1>Recuperar senha</h1>
          <br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              className="reset-email"
              type="email"
              placeholder="E-mail"
            />
          </Form.Group>

          <br />

          <Button
            onClick={resetLogin}
            className="reset-button"
            variant="primary"
            type="button"
          >
            Enviar
          </Button>

          {erro.length > 0 ? (
            <Alert className="alert-erro">{erro}</Alert>
          ) : null}

          {sucesso.length > 0 ? (
            <Alert className="alert-sucesso">{sucesso}</Alert>
          ) : null}

          <div className="reset-link">
            <Link to="/app/newlogin">Criar uma conta</Link>
            <Link to="/app">Já tenho uma conta</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
