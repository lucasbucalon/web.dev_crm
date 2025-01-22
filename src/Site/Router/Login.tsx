import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Icon } from "@iconify/react";

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { AuthContext } from "../../Config/Context";

import "./login.css";

export default function Login() {
  // Estados do componente
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();
  const { setLogado } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Configura estado de autenticação e redireciona
      setLogado(true);
      console.log("Usuário logado:", userCredential.user);
      navigate("/app/home");
    } catch (error: unknown) {
      // Tratar erros de autenticação
      if (error instanceof Error) {
        console.error("Erro de login:", error.message);
      } else {
        console.error("Erro desconhecido durante o login:", error);
      }
      setLogado(false);
      setLoginError(true); // Mostra mensagem de erro
    }
  };

  return (
    <div className="back">
      <div className="container">
        <Form className="form-login" onSubmit={(e) => e.preventDefault()}>
          <a href="/">
            <Icon className="ico-dev" icon="logos:web-dev" />
          </a>
          <h1>Login</h1>
          <br />

          {/* Campo de E-mail */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-email"
              type="email"
              placeholder="E-mail"
              required
            />
          </Form.Group>

          <br />

          {/* Campo de Senha */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-pass"
              type="password"
              placeholder="Senha"
              required
            />
          </Form.Group>

          {/* Botão de Login */}
          <Button
            onClick={handleLogin}
            className="form-button"
            variant="primary"
            type="button"
          >
            Entrar
          </Button>

          {/* Exibição de mensagem de erro */}
          {loginError && (
            <Alert variant="danger" className="alert-login">
              E-mail ou senha inválidos!
            </Alert>
          )}

          {/* Links de recuperação de senha e criação de conta */}
          <div className="form-link">
            <Link to="/app/resetsenha">Esqueci minha senha</Link>
            <Link to="/app/newlogin">Criar uma conta</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
