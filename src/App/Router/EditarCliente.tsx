import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./style.css";

export default function EditarCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const { id } = useParams(); // Obtendo o id do cliente da URL
  const navigate = useNavigate(); // Usado para navegação programática após a alteração

  const alterarCliente = async () => {
    // Implemente a lógica para alterar o cliente aqui
    try {
      const response = await fetch(`https://api.example.com/clientes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          fone,
        }),
      });

      if (response.ok) {
        setMensagem("Cliente alterado com sucesso!");
        setTimeout(() => {
          navigate("/app/home"); // Redireciona para a página inicial ou lista de clientes
        }, 2000); // Após 2 segundos, redireciona
      } else {
        setMensagem("Erro ao alterar cliente!");
      }
    } catch (error) {
      setMensagem("Erro ao alterar cliente!");
    }
  };

  useEffect(() => {
    if (mensagem.length > 0) {
      setTimeout(() => {
        setMensagem("");
      }, 3000); // Limpa a mensagem após 3 segundos
    }
  }, [mensagem]);

  return (
    <div className="container-fluid">
      <h1 className="title">- Editar Cliente -</h1>

      <Form className="colum">
        {/* Exibindo a mensagem de sucesso ou erro */}
        {mensagem && (
          <Alert variant={mensagem.includes("sucesso") ? "success" : "danger"}>
            {mensagem}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Código</Form.Label>
          <Form.Control value={id} className="form" type="text" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form"
            type="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            value={fone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFone(e.target.value)
            }
            className="form"
            type="text"
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Link to="/app/home" className="btn btn-secondary">
            Voltar
          </Link>
          <button onClick={alterarCliente} className="btn btn-primary">
            Alterar Cliente
          </button>
        </div>
      </Form>
    </div>
  );
}
