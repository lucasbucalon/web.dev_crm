import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { Icon } from "@iconify/react";

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { AuthContext } from "../../Config/Context";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sucesso, setSucesso] = useState("");
  const navigate = useNavigate(); // Renomeado de setUser para navigate
  const { setLogado } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLogado(true);
      const user = userCredential.user;
      console.log(user);
      navigate("/app/home");
    } catch (error: unknown) {
      setLogado(false);
      const errorMessage = (error as Error).message;
      console.log(errorMessage);
      setSucesso("N");
    }
  };

  return (
    <div className="back">
      <div className="container">
        <Form className="form-login">
          <a href="/">
            <Icon className="ico-dev" icon="logos:web-dev" />
          </a>
          <h1>Login</h1>
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
            onClick={handleLogin}
            className="form-button"
            variant="primary"
            type="button"
          >
            Entrar
          </Button>

          {sucesso === "N" ? (
            <Alert className="alert-login">E-mail ou Senha inválido !</Alert>
          ) : null}

          <div className="form-link">
            <Link to="/app/resetsenha">Esqueci minha senha</Link>
            <Link to="/app/newlogin">Criar uma conta</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
